"use client";

import { useEffect, useState } from "react";
import { Icon } from "./ui-icons";

export function CopyCode() {
  const [status, setStatus] = useState("");
  return <button type="button" className="copy-button" aria-label="Copy promo code FXBONUS" onClick={async () => {try {await navigator.clipboard.writeText("FXBONUS"); setStatus("Copied!");} catch {setStatus("FXBONUS");}}}>{status || <Icon name="copy"/>}<span className="sr-only" role="status">{status}</span></button>;
}


export function ArticleTools({ articleId = "prop-firm-review" }: {articleId?: string}) {
  const storageKey = `finora-${articleId}-saved`;
  const [saved, setSaved] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {try {setSaved(localStorage.getItem(storageKey) === "true");} catch {}}, [storageKey]);
  return <div className="article-tools"><button title={saved ? "Remove bookmark" : "Save article"} aria-label={saved ? "Remove bookmark" : "Save article"} aria-pressed={saved} className={saved ? "saved" : ""} onClick={() => {try {localStorage.setItem(storageKey, String(!saved)); setSaved(!saved); setMessage(saved ? "Bookmark removed" : "Article saved");} catch {setMessage("Bookmarks are unavailable in this browser.");}}}><Icon name="bookmark"/></button><button aria-label="Share article" title="Share article" onClick={async () => {try {if(navigator.share) await navigator.share({title: document.title, url: window.location.href}); else {await navigator.clipboard.writeText(window.location.href); setMessage("Link copied!");}} catch {setMessage("Copy the page address to share.");}}}><Icon name="share"/></button><span role="status" className="tools-message">{message}</span></div>;
}

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {const update = () => {const length = document.documentElement.scrollHeight - window.innerHeight; setProgress(length > 0 ? window.scrollY / length * 100 : 0);}; update(); window.addEventListener("scroll", update, {passive: true}); window.addEventListener("resize", update); return () => {window.removeEventListener("scroll", update); window.removeEventListener("resize", update);};}, []);
  return <div className="reading-progress" style={{width: `${progress}%`}}/>;
}

export function TableOfContents({items}: {items: {id: string; title: string}[]}) {
  const [active, setActive] = useState(items[0].id);
  useEffect(() => {const observer = new IntersectionObserver(entries => {for(const entry of entries) if(entry.isIntersecting) setActive(entry.target.id);}, {rootMargin: "-125px 0px -45% 0px"}); items.forEach(item => {const node = document.getElementById(item.id); if(node) observer.observe(node);}); return () => observer.disconnect();}, [items]);
  return <nav className="toc" aria-label="Table of contents"><div className="toc-heading"><Icon name="list" size={18}/> ON THIS PAGE</div><div className="toc-links">{items.map(item => <a key={item.id} href={`#${item.id}`} className={active === item.id ? "active" : ""} aria-current={active === item.id ? "location" : undefined}>{item.title}</a>)}</div></nav>;
}
