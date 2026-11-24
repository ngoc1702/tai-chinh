import Image from "next/image";
import Link from "next/link";
import { topics, type ArticleSummary } from "./catalog";
import { referenceMedia, topicMedia, TopicIcon } from "./reference-media";

export function PageIntro({eyebrow,title,description}: {eyebrow:string;title:string;description:string}) {
  const topic=topics.find(topic=>topic.title===eyebrow);
  const image=topic ? topicMedia(topic.slug).image : eyebrow === "About Skybet" || eyebrow === "Contact" ? referenceMedia.reader : topicMedia(eyebrow === "Editorial & risk notice" ? "insurance" : eyebrow === "The journal" ? "markets" : "banking").image;
  return <header className="page-intro"><nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">{eyebrow}</span></nav><div className="page-intro-grid"><div><p className="section-kicker">{eyebrow.toUpperCase()}</p><h1>{title}</h1><p className="page-description">{description}</p><div className="intro-detail"><span className="intro-detail-line"/>CLEAR GUIDES. A WIDER PERSPECTIVE.</div></div><div className="page-intro-art"><Image src={image} alt="" width={420} height={320} sizes="(max-width:800px) 180px, 300px"/></div></div></header>;
}

export function ArticleCard({article}: {article:ArticleSummary}) {
  const topic = topics.find(topic => topic.slug === article.category);
  return <article className="archive-card"><Link className="post-art" href={`/blog/${article.slug}`} aria-label={`Read ${article.title}`}>
    <Image className={article.image && article.imageKind!=="illustration" ? "article-cover" : "article-reference-art"} src={article.image || topicMedia(article.category).image} alt={article.imageAlt || ""} fill sizes="(max-width: 800px) 100vw, 400px"/>
    </Link><div className="archive-card-copy"><Link className="story-category" href={`/topics/${article.category}`}>{topic?.title.toUpperCase()}</Link><h3><Link href={`/blog/${article.slug}`}>{article.title}</Link></h3><p>{article.description}</p><div className="story-meta"><time dateTime={article.date}>{article.displayDate}</time><span>·</span>{article.minutes} min read</div><Link className="text-link" href={`/blog/${article.slug}`}>Read the article</Link></div></article>;
}

export function ArticleGrid({items}: {items:ArticleSummary[]}) {return <div className="archive-grid">{items.map(article => <ArticleCard key={article.slug} article={article}/>)}</div>;}

export function TopicLinks() {return <div className="topic-grid">{topics.map(topic => <Link className="topic-card" key={topic.slug} href={`/topics/${topic.slug}`}><TopicIcon slug={topic.slug}/><span className="topic-tag">{topic.tag}</span><h3>{topic.title}</h3><p>{topic.description}</p><span className="topic-action">Explore topic</span></Link>)}</div>;}
