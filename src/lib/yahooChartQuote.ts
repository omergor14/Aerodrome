export type InvestorsStockQuote = {
  priceUsd: number;
  previousCloseUsd: number;
  changeUsd: number;
  changePercent: number;
};

/** Shown stock level is 80% of the live ILS quote (after USD conversion). */
const DISPLAY_VALUE_FACTOR = 0.8;

const USD_ILS_PAIR = "USDILS=X";

type ChartResponse = {
  chart?: {
    result?: Array<{
      meta?: {
        regularMarketPrice?: number;
        chartPreviousClose?: number;
        currency?: string;
      };
      indicators?: {
        quote?: Array<{ close?: Array<number | null> }>;
      };
    }>;
    error?: { description?: string };
  };
};

type ChartResultItem = NonNullable<
  NonNullable<ChartResponse["chart"]>["result"]
>[number];

function lastValidClose(result: ChartResultItem): number | null {
  const closes = result.indicators?.quote?.[0]?.close;
  if (!closes?.length) return null;
  for (let i = closes.length - 1; i >= 0; i--) {
    const v = closes[i];
    if (typeof v === "number" && !Number.isNaN(v)) return v;
  }
  return null;
}

/**
 * Yahoo chart API is not callable from the browser (no CORS). In dev, Vite proxies `/api/yahoo`.
 * For static production hosting, set `VITE_YAHOO_PROXY_BASE` to your proxy origin/path
 * (e.g. API Gateway + Lambda forwarding to query1.finance.yahoo.com). The proxy must
 * forward a normal browser `User-Agent` and `Accept: application/json` or Yahoo often
 * returns HTTP 429.
 */
function chartApiBase(): string {
  const fromEnv = import.meta.env.VITE_YAHOO_PROXY_BASE as string | undefined;
  if (fromEnv) return fromEnv.replace(/\/$/, "");
  if (import.meta.env.DEV) return "/api/yahoo";
  return "https://query1.finance.yahoo.com";
}

async function fetchChart(symbol: string): Promise<ChartResponse> {
  const base = chartApiBase();
  const url = `${base}/v8/finance/chart/${encodeURIComponent(symbol)}?interval=1d&range=5d`;

  const res = await fetch(url, {
    headers: { Accept: "application/json" },
  });

  if (!res.ok) {
    throw new Error(`Quote request failed (${res.status})`);
  }

  return (await res.json()) as ChartResponse;
}

function parseIlsEquity(data: ChartResponse): {
  priceIls: number;
  previousCloseIls: number;
} {
  const result = data.chart?.result?.[0];
  if (!result?.meta) {
    const msg = data.chart?.error?.description ?? "No quote data";
    throw new Error(msg);
  }

  const { meta } = result;
  const price = meta.regularMarketPrice;
  if (typeof price !== "number" || Number.isNaN(price)) {
    throw new Error("Invalid market price");
  }

  let previousClose = meta.chartPreviousClose;
  if (typeof previousClose !== "number" || Number.isNaN(previousClose)) {
    const fallback = lastValidClose(result);
    if (fallback == null) {
      throw new Error("No previous close");
    }
    previousClose = fallback;
  }

  return { priceIls: price, previousCloseIls: previousClose };
}

function parseIlsPerUsd(data: ChartResponse): number {
  const result = data.chart?.result?.[0];
  const rate = result?.meta?.regularMarketPrice;
  if (typeof rate !== "number" || Number.isNaN(rate) || rate <= 0) {
    throw new Error("Invalid USD/ILS rate");
  }
  return rate;
}

/**
 * TLV price in ILS → scaled by DISPLAY_VALUE_FACTOR → converted to USD using USDILS=X
 * (ILS per 1 USD).
 */
export async function fetchInvestorsStockUsdQuote(
  symbol: string,
): Promise<InvestorsStockQuote> {
  const [equityJson, fxJson] = await Promise.all([
    fetchChart(symbol),
    fetchChart(USD_ILS_PAIR),
  ]);

  const { priceIls, previousCloseIls } = parseIlsEquity(equityJson);
  const ilsPerUsd = parseIlsPerUsd(fxJson);

  const toDisplayUsd = (ils: number) => (ils * DISPLAY_VALUE_FACTOR) / ilsPerUsd;

  const priceUsd = toDisplayUsd(priceIls);
  const previousCloseUsd = toDisplayUsd(previousCloseIls);
  const changeUsd = priceUsd - previousCloseUsd;
  const changePercent =
    previousCloseIls !== 0
      ? ((priceIls - previousCloseIls) / previousCloseIls) * 100
      : 0;

  return {
    priceUsd,
    previousCloseUsd,
    changeUsd,
    changePercent,
  };
}

export function formatUsd(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}
