"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "./ui-icons";

export function HomeSearch({items}:{items:{title:string;href:string;keywords:string}[]}) {
  const [query,setQuery] = useState("");
  const [searched,setSearched] = useState(false);
  const results = items.filter(item => `${item.title} ${item.keywords}`.toLowerCase().includes(query.toLowerCase().trim()));
  return <div className="home-search"><form role="search" onSubmit={event => {event.preventDefault();setSearched(true);}}><Icon name="search" size={23}/><label className="sr-only" htmlFor="home-query">Find a financial topic or guide</label><input id="home-query" type="search" value={query} onChange={event => {setQuery(event.target.value);setSearched(false);}} placeholder="Search guides"/><button type="submit">Find a guide</button></form>{searched && <div className="home-search-results" role="status"><div className="search-results-heading"><strong>{results.length ? `${results.length} guides and topics` : "No matching guides"}</strong><button type="button" aria-label="Close search results" onClick={()=>setSearched(false)}><Icon name="close" size={20}/></button></div>{results.length ? results.map(result => <Link key={result.href} href={result.href}>{result.title}</Link>) : <p>Try “budget”, “credit”, or “trading”, or <Link href="/topics">browse all topics</Link>.</p>}</div>}</div>;
}
