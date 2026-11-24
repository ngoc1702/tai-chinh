"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Icon } from "./ui-icons";
import { topics } from "./catalog";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  return <header className="site-header" onKeyDown={event => {if (event.key === "Escape") setMenuOpen(false);}}><div className="header-inner">
    <Link className="brand" href="/" aria-label="Skybet home" onClick={() => setMenuOpen(false)}>Sky<span>bet</span>.</Link>
    <nav id="main-navigation" className={menuOpen ? "main-navigation is-open" : "main-navigation"} aria-label="Main navigation" onClick={() => setMenuOpen(false)}>
      {["credit-cards","banking","mortgages","loans","insurance","markets"].map(slug => {const topic=topics.find(topic=>topic.slug===slug)!;return <Link key={slug} href={`/topics/${slug}`} className={pathname === `/topics/${slug}` ? "nav-link nav-active" : "nav-link"} aria-current={pathname === `/topics/${slug}` ? "page" : undefined}>{slug === "markets" ? "Investing" : topic.title}</Link>;})}
      <Link className="mobile-nav-extra" href="/topics">All topics</Link><Link className="mobile-nav-extra" href="/blog">The journal</Link><Link className="mobile-nav-extra" href="/about">About Skybet</Link><Link className="mobile-nav-extra" href="/contact">Contact</Link>
    </nav>
    <div className="header-actions"><Link href="/contact" className="header-contact" aria-current={pathname === "/contact" ? "page" : undefined} onClick={()=>setMenuOpen(false)}>Contact</Link><Link href="/blog" className="header-journal" onClick={()=>setMenuOpen(false)}>The journal</Link><Link href="/learn" className="header-cta" aria-current={pathname === "/learn" ? "page" : undefined} onClick={() => setMenuOpen(false)}>Explore guides</Link>
      <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-navigation" aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen(!menuOpen)} onKeyDown={event => {if (event.key === "Escape") setMenuOpen(false);}}><Icon name={menuOpen ? "close" : "menu"}/></button>
    </div>
  </div></header>;
}
