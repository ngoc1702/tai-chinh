"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Icon } from "./ui-icons";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  return <header className="site-header" onKeyDown={event => {if (event.key === "Escape") setMenuOpen(false);}}><div className="header-inner">
    <Link className="brand" href="/" aria-label="Finora home" onClick={() => setMenuOpen(false)}><span className="brand-mark" aria-hidden="true"><i/><i/><i/></span>Fin<span>ora</span>.</Link>
    <nav id="main-navigation" className={menuOpen ? "main-navigation is-open" : "main-navigation"} aria-label="Main navigation" onClick={() => setMenuOpen(false)}>
      <Link href="/" className={pathname === "/" ? "nav-active" : undefined} aria-current={pathname === "/" ? "page" : undefined}>Home</Link>
      <Link href="/#topics">Explore topics</Link>
      <Link href="/#insights" className={pathname.startsWith("/blog/") ? "nav-active" : undefined}>Insights</Link>
      <Link href="/#about">About</Link>
    </nav>
    <div className="header-actions"><Link href="/#learn" className="header-cta" onClick={() => setMenuOpen(false)}><Icon name="book" size={17}/>Start learning</Link>
      <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-navigation" aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen(!menuOpen)} onKeyDown={event => {if (event.key === "Escape") setMenuOpen(false);}}><Icon name={menuOpen ? "close" : "menu"}/></button>
    </div>
  </div></header>;
}
