/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Proxy base for Yahoo chart API in production (no trailing slash), e.g. https://api.example.com/yahoo */
  readonly VITE_YAHOO_PROXY_BASE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
