import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const yahooBrowserHeaders = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    Accept: "application/json",
};
// Static `dist/` output works with S3, CloudFront, or Amplify Hosting.
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            // Yahoo Finance has no browser CORS; proxy only used in `vite dev`.
            // Without a browser-like User-Agent, Yahoo often responds 429 Too Many Requests.
            "/api/yahoo": {
                target: "https://query1.finance.yahoo.com",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api\/yahoo/, ""),
                configure(proxy) {
                    proxy.on("proxyReq", (proxyReq) => {
                        for (const [k, v] of Object.entries(yahooBrowserHeaders)) {
                            proxyReq.setHeader(k, v);
                        }
                    });
                },
            },
        },
    },
});
