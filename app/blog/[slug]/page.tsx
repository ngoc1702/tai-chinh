import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { archivePosts, readingMinutes } from "../../posts";
import { Icon } from "../../ui-icons";
import { ArticleTools, ReadingProgress, TableOfContents } from "../../reading-tools";

type Props = {params: Promise<{slug: string}>};
export function generateStaticParams() {return archivePosts.map(post => ({slug: post.slug}));}
export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {slug} = await params;
  const post = archivePosts.find(post => post.slug === slug);
  if (!post) notFound();
  return {title: `${post.title} | Finora`, description: post.description};
}

export default async function ArchivePost({params}: Props) {
  const {slug} = await params;
  const post = archivePosts.find(post => post.slug === slug);
  if (!post) notFound();
  return <><ReadingProgress/><main className="page-shell archive-post">
    <div className="breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/#archive">2019 archive</Link><span>/</span><span>{post.category}</span></div>
    <div className="article-layout"><div className="main-column">
      <div className="eyebrow">{post.category.toUpperCase()}<span className="edition">2019 ARCHIVE</span></div>
      <h1>{post.title}</h1><p className="standfirst">{post.description}</p>
      <div className="article-meta"><div className="author-avatar">F</div><div className="author-info"><strong>Finora Editorial</strong><span><time dateTime={post.date}>{post.displayDate}</time><b>·</b>{readingMinutes(post)} min read</span></div><ArticleTools articleId={post.slug}/></div>
      <div className={`post-art post-art-large ${post.tone}`} role="img" aria-label={`${post.category} editorial illustration`}><div className="post-art-ring"/><Icon name={post.icon} size={96}/><span>FINORA / THE ESSENTIALS</span></div>
      <article className="article-body">{post.sections.map((section,index) => <section key={section.title} id={`section-${index}`}><h2>{section.title}</h2>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</section>)}<p className="disclosure">For educational purposes only. This article does not constitute financial advice.</p></article>
      <div className="back-to-journal"><Link className="text-link" href="/#archive">Back to the journal</Link></div>
    </div><aside className="sidebar"><div className="sidebar-sticky"><TableOfContents items={post.sections.map((section,index) => ({id:`section-${index}`,title:section.title}))}/><div className="sidebar-note"><Icon name="book" size={25}/><div><strong>A little more clarity.</strong><p>Explore the essentials.<br/>Understand the context.<br/>Keep learning.</p></div></div></div></aside></div>
  </main></>;
}
