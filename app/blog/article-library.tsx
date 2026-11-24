"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArticleGrid } from "../content-ui";
import { topics, type ArticleSummary } from "../catalog";

const PAGE_SIZE = 6;
export function ArticleLibrary({items}: {items:ArticleSummary[]}) {
  const [query,setQuery] = useState("");
  const [category,setCategory] = useState("all");
  const [sort,setSort] = useState("newest");
  const [page,setPage] = useState(1);
  const libraryRef=useRef<HTMLElement>(null);
  function goToPage(nextPage:number){
    setPage(nextPage);
    requestAnimationFrame(()=>libraryRef.current?.scrollIntoView({behavior:"instant",block:"start"}));
  }
  const matches = items.filter(article => (category === "all" || article.category === category) && `${article.title} ${article.description}`.toLowerCase().includes(query.toLowerCase().trim()));
  const featured = matches.find(article=>article.pinned);
  const filtered = matches.filter(article=>!article.pinned).sort((a,b)=>sort === "title" ? a.title.localeCompare(b.title) : sort === "oldest" ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date));
  const pages = Math.max(1,Math.ceil(filtered.length/PAGE_SIZE));
  const currentPage = Math.min(page,pages);
  function reset(){setQuery("");setCategory("all");setSort("newest");setPage(1);}
  return <>
    {featured && <section className="journal-feature" aria-label="Pinned article"><Link className="journal-feature-image" href={`/blog/${featured.slug}`} aria-label={`Read ${featured.title}`}><Image src={featured.image!} alt={featured.imageAlt!} fill priority sizes="(max-width:800px) 100vw, 600px"/></Link><div className="journal-feature-copy"><span className="pinned-label">EDITOR&apos;S PICK · PINNED</span><Link className="story-category" href="/topics/trading">TRADING & PLATFORMS</Link><h2><Link href={`/blog/${featured.slug}`}>{featured.title}</Link></h2><p>{featured.description}</p><div className="story-meta"><time dateTime={featured.date}>{featured.displayDate}</time><span>·</span>{featured.minutes} min read</div><Link className="primary-link" href={`/blog/${featured.slug}`}>Read the full review <span aria-hidden="true">→</span></Link></div></section>}
    <section ref={libraryRef} className="journal-library" aria-labelledby="library-heading"><div className="section-heading"><div><p className="section-kicker">EXPLORE THE COLLECTION</p><h2 id="library-heading">A little clarity, every read.</h2></div><span className="archive-year">2019 EDITION</span></div>
    <form className="library-controls" role="search" onSubmit={event=>event.preventDefault()}><label>Search the journal<input type="search" value={query} onChange={event=>{setQuery(event.target.value);setPage(1);}} placeholder="Search articles or keywords"/></label><label>Topic<select value={category} onChange={event=>{setCategory(event.target.value);setPage(1);}}><option value="all">All topics</option>{topics.map(topic=><option value={topic.slug} key={topic.slug}>{topic.title}</option>)}</select></label><label>Sort by<select value={sort} onChange={event=>{setSort(event.target.value);setPage(1);}}><option value="newest">Newest first</option><option value="oldest">Oldest first</option><option value="title">Title: A to Z</option></select></label></form>
    <div className="library-results-bar"><p className="library-count" role="status">{matches.length} {matches.length===1 ? "article" : "articles"}{query ? ` matching “${query}”` : " in this collection"}{featured ? " · Featured review pinned above" : ""}</p>{(query || category!=="all") && <button className="filter-reset" type="button" onClick={reset}>Clear filters</button>}</div>
    {filtered.length ? <><ArticleGrid items={filtered.slice((currentPage-1)*PAGE_SIZE,currentPage*PAGE_SIZE)}/>{pages>1 && <nav className="journal-pagination" aria-label="Article pages"><button type="button" disabled={currentPage===1} onClick={()=>goToPage(currentPage-1)}>← Previous</button><span aria-live="polite">Page {currentPage} of {pages}</span><button type="button" disabled={currentPage===pages} onClick={()=>goToPage(currentPage+1)}>Next →</button></nav>}</> : !featured ? <div className="empty-library"><h3>No articles found</h3><p>Try another keyword or browse all eight topics.</p><button type="button" className="primary-link" onClick={reset}>Reset filters</button></div> : <div className="empty-library"><h3>Your matching review is featured above.</h3><p>Explore more subjects to find your next read.</p><button type="button" className="primary-link" onClick={reset}>Browse all articles</button></div>}
    </section><section className="journal-help"><div><p className="section-kicker">KEEP THE CONVERSATION GOING</p><h2>A question worth exploring?</h2><p>Suggest a topic, flag a detail, or tell us what would make a guide clearer.</p></div><Link className="primary-link" href="/contact">Contact the team <span aria-hidden="true">→</span></Link></section>
  </>;
}
