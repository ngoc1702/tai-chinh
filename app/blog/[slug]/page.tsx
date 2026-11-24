import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { archivePosts, readingMinutes } from "../../posts";
import { Icon } from "../../ui-icons";
import { articles } from "../../catalog";
import { ArticleGrid } from "../../content-ui";
import { articleMedia } from "../../reference-media";
import { ArticleTools, ReadingProgress, TableOfContents } from "../../reading-tools";

type Props = {params: Promise<{slug: string}>};
export function generateStaticParams() {return archivePosts.map(post => ({slug: post.slug}));}
export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {slug} = await params;
  const post = archivePosts.find(post => post.slug === slug);
  if (!post) notFound();
  return {title: `${post.title} | Skybet`, description: post.description, openGraph: {type: "article", title: post.title, description: post.description, publishedTime: `${post.date}T00:00:00Z`}};
}

export default async function ArchivePost({params}: Props) {
  const {slug} = await params;
  const post = archivePosts.find(post => post.slug === slug);
  if (!post) notFound();
  return <><ReadingProgress/><main className="page-shell archive-post">
    <div className="breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/blog">2019 archive</Link><span>/</span><span>{post.category}</span></div>
    <div className="article-layout"><div className="main-column">
      <div className="eyebrow">{post.category.toUpperCase()}<span className="edition">2019 ARCHIVE</span></div>
      <h1>{post.title}</h1><p className="standfirst">{post.description}</p>
      <div className="article-meta"><div className="author-avatar">S</div><div className="author-info"><strong>Skybet Editorial</strong><span><time dateTime={post.date}>{post.displayDate}</time><b>·</b>{readingMinutes(post)} min read</span></div><ArticleTools articleId={post.slug}/></div>
      <div className="post-art-large"><Image className="topic-reference-image" src={articleMedia(post.slug,post.topic).image} width={480} height={320} alt={articleMedia(post.slug,post.topic).alt} sizes="(max-width:800px) 80vw, 700px"/></div>
      <article className="article-body">{post.sections.map((section,index) => <section key={section.title} id={`section-${index}`}><h2>{section.title}</h2>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</section>)}{post.sources && <section className="article-sources"><h2>Further reading</h2><ul>{post.sources.map(source=><li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.title}</a></li>)}</ul></section>}<p className="disclosure">For educational purposes only. This article does not constitute financial advice.</p></article>
      <div className="back-to-journal"><Link className="text-link" href="/blog">Back to the journal</Link></div>
    </div><aside className="sidebar"><div className="sidebar-sticky"><TableOfContents items={post.sections.map((section,index) => ({id:`section-${index}`,title:section.title}))}/><div className="sidebar-note"><Icon name="book" size={25}/><div><strong>A little more clarity.</strong><p>Explore the essentials.<br/>Understand the context.<br/>Keep learning.</p></div></div></div></aside></div>
  <section className="related-section"><div className="section-heading"><div><p className="section-kicker">KEEP EXPLORING</p><h2>More perspective, one page away.</h2></div><Link className="text-link" href={`/topics/${post.topic}`}>Explore this topic</Link></div><ArticleGrid items={articles.filter(article=>article.slug!==post.slug).sort((a,b)=>Number(b.category===post.topic)-Number(a.category===post.topic)).slice(0,3)}/></section></main></>;
}
