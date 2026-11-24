import type { CSSProperties, HTMLAttributes } from "react";

const files = {
  card:"card.svg", bank:"bank.svg", home:"home.svg", loan:"loan.svg",
  chart:"chart.svg", wallet:"wallet.svg", candles:"trading.svg",
  book:"Files.svg", shield:"insurance.svg", info:"SealCheck.svg",
  list:"list.svg", plus:"Plus.svg", chevron:"chevron.svg",
  close:"close.svg", search:"search.svg", bookmark:"Files.svg",
  share:"Link.svg", copy:"Link.svg", sparkles:"LightBulb.svg",
  handshake:"Handshake.svg", verified:"ShieldCheck.svg", menu:"menu",
} as const;
export type IconName = keyof typeof files;

export function Icon({name,size=20,className="",style,...props}:HTMLAttributes<HTMLSpanElement>&{name:IconName;size?:number}) {
  const dimensions:CSSProperties = {width:size,height:size,...style};
  if(name === "menu") return <span className={`site-icon menu-icon ${className}`} style={dimensions} aria-hidden="true" {...props}><i/><i/><i/></span>;
  const mask = `url("/assets/nerdwallet/icons/${files[name]}")`;
  return <span className={`site-icon ${className}`} style={{...dimensions,maskImage:mask,WebkitMaskImage:mask}} aria-hidden="true" {...props}/>;
}
