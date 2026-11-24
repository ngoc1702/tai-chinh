import type { SVGProps } from "react";

const paths = {
  wallet: <><path d="M20 8V5a2 2 0 0 0-2-2H6a3 3 0 0 0 0 6h14v11H6a3 3 0 0 1-3-3V6"/><path d="M20 12h-5v4h5M16.5 14h.01"/></>,
  chart: <><path d="M4 3v17h17M8 15v-4m5 4V7m5 8V4"/></>,
  candles: <><path d="M6 3v4m0 10v4m6-18v10m0 6v2m6-18v2m0 10v6"/><rect x="4" y="7" width="4" height="10" rx="1"/><rect x="10" y="13" width="4" height="6" rx="1"/><rect x="16" y="5" width="4" height="10" rx="1"/></>,
  book: <><path d="M12 5v15M12 5C9 3 5 3 3 4v15c3-1 6-1 9 1 3-2 6-2 9-1V4c-2-1-6-1-9 1Z"/></>,
  shield: <><path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z"/><path d="m8 12 3 3 5-6"/></>,
  info: <><circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10h.01"/></>,
  list: <><path d="M9 6h12M9 12h12M9 18h12M3 6h.01M3 12h.01M3 18h.01"/></>,
  plus: <path d="M12 5v14M5 12h14"/>,
  menu: <path d="M4 6h16M4 12h16M4 18h16"/>,
  close: <path d="m6 6 12 12M6 18 18 6"/>,
  bookmark: <path d="M6 4h12v17l-6-4-6 4z"/>,
  share: <path d="M12 15V3m-4 4 4-4 4 4M5 12v8h14v-8"/>,
  copy: <><rect x="8" y="8" width="12" height="13" rx="2"/><path d="M16 8V3H3v13h5"/></>,
  sparkles: <><path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z"/></>,
};

export type IconName = keyof typeof paths;

export function Icon({ name, size = 20, ...props }: SVGProps<SVGSVGElement> & { name: IconName; size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...props}>{paths[name]}</svg>;
}
