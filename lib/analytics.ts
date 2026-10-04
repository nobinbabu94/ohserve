type DataLayerEvent = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer: DataLayerEvent[];
  }
}

export function pushDataLayer(event: string, parameters: DataLayerEvent = {}) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...parameters });
}
