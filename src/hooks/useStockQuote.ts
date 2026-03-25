import { useEffect, useState } from "react";
import {
  fetchInvestorsStockUsdQuote,
  type InvestorsStockQuote,
} from "../lib/yahooChartQuote";

export type StockQuoteState =
  | { status: "idle" | "loading" }
  | { status: "ok"; quote: InvestorsStockQuote }
  | { status: "error"; message: string };

export function useStockQuote(symbol: string): StockQuoteState {
  const [state, setState] = useState<StockQuoteState>({ status: "idle" });

  useEffect(() => {
    let cancelled = false;
    setState({ status: "loading" });

    fetchInvestorsStockUsdQuote(symbol)
      .then((quote) => {
        if (!cancelled) setState({ status: "ok", quote });
      })
      .catch((e: unknown) => {
        if (!cancelled) {
          const message =
            e instanceof Error ? e.message : "Could not load stock quote";
          setState({ status: "error", message });
        }
      });

    return () => {
      cancelled = true;
    };
  }, [symbol]);

  return state;
}
