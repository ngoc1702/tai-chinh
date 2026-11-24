import Image from "next/image";
import Link from "next/link";
import { Icon, type IconName } from "./ui-icons";
import { archivePosts, readingMinutes } from "./posts";
import { propGuide, propGuideMinutes } from "./prop-guide";

const topics = [
  { title: "Money essentials", text: "Make sense of the language behind everyday financial decisions.", icon: "wallet", href: "#money-basics", tag: "BUILD YOUR FOUNDATION" },
  { title: "Markets & investing", text: "Explore how markets work and what shapes the bigger picture.", icon: "chart", href: "#market-basics", tag: "SEE THE BIGGER PICTURE" },
  { title: "Trading & platforms", text: "Understand trading programs, account models, and the rules behind them.", icon: "candles", href: "/blog/prop-firm-review", tag: "KNOW THE DETAILS" },
];

export default function Home() {
  return <main className="home-page">
    <section className="home-hero home-container">
      <div className="home-hero-copy">
        <p className="section-kicker">A FRESH PERSPECTIVE ON FINANCE</p>
        <h1>Understand money.<br/>See the bigger<br/><em>picture.</em></h1>
        <p className="home-intro">Money, markets, and the decisions in between. Find thoughtful insights and clear explanations to build your financial knowledge, one idea at a time.</p>
        <div className="hero-actions"><Link className="primary-link" href="#insights">Explore the insights</Link><Link className="text-link" href="#about">Meet Finora</Link></div>
        <div className="hero-caption"><span className="caption-line"/> CLEAR IDEAS. MORE PERSPECTIVE.</div>
      </div>
      <div className="finance-art" role="img" aria-label="Editorial illustration of financial learning, with an abstract line chart and rising columns">
        <div className="art-top"><span>FINORA / PERSPECTIVES</span><span>MONEY & MARKETS</span></div>
        <div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/>
        <div className="art-heading">A little clarity.<br/><em>A wider horizon.</em></div>
        <svg className="art-chart" viewBox="0 0 460 235" fill="none" aria-hidden="true"><defs><linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="235" gradientUnits="userSpaceOnUse"><stop stopColor="#c9dea8" stopOpacity=".25"/><stop offset="1" stopColor="#c9dea8" stopOpacity="0"/></linearGradient></defs><path d="M0 200H460M0 150H460M0 100H460M0 50H460" stroke="#ffffff0d"/><path d="M0 198 46 177 81 188 126 134 167 149 208 112 250 129 290 70 330 91 374 42 414 62 460 12V235H0Z" fill="url(#chart-fill)"/><path d="m0 198 46-21 35 11 45-54 41 15 41-37 42 17 40-59 40 21 44-49 40 20 46-50" stroke="#c9dea8" strokeWidth="2.5"/></svg>
        <div className="art-bars"><i/><i/><i/><i/><i/></div>
        <div className="art-foot"><span>KNOWLEDGE IS A LONG-TERM ASSET.</span><span>Illustration, not market data</span></div>
      </div>
    </section>

    <section className="topic-section home-container" id="topics">
      <div className="section-heading"><div><p className="section-kicker">FOLLOW YOUR CURIOSITY</p><h2>A world worth understanding.</h2></div><p>Start with a topic.<br/>Find a new perspective.</p></div>
      <div className="topic-grid">{topics.map(topic => <Link className="topic-card" key={topic.title} href={topic.href}><span className="topic-symbol" aria-hidden="true"><Icon name={topic.icon as IconName} size={28}/></span><span className="topic-tag">{topic.tag}</span><h3>{topic.title}</h3><p>{topic.text}</p><span className="topic-action">Explore topic</span></Link>)}</div>
    </section>

    <section className="insights-section home-container" id="insights">
      <div className="section-heading"><div><p className="section-kicker">THE FINORA JOURNAL</p><h2>A closer look.</h2></div><span className="journal-note">Our latest in-depth read</span></div>
      <div className="featured-story"><Link href="/blog/prop-firm-review" className="featured-image"><Image src={propGuide.image} width={1200} height={676} alt={propGuide.imageAlt} sizes="(max-width: 800px) 100vw, 550px"/></Link><div className="featured-copy"><div className="story-category">TRADING & PLATFORMS <span>•</span> THE 2019 COLLECTION</div><Link href="/blog/prop-firm-review"><h3>{propGuide.title}</h3></Link><p>{propGuide.description}</p><div className="story-meta"><time dateTime={propGuide.date}>{propGuide.displayDate}</time><span>·</span>{propGuideMinutes} min read</div><Link className="text-link" href="/blog/prop-firm-review">Read the full story</Link></div></div>
    </section>

    <section className="archive-section home-container" id="archive">
      <div className="section-heading"><div><p className="section-kicker">FROM THE 2019 ARCHIVE</p><h2>Ideas to come back to.</h2></div><span className="journal-note">The foundations of financial understanding</span></div>
      <div className="archive-grid">{archivePosts.map(post => <article className="archive-card" key={post.slug}>
        <Link href={`/blog/${post.slug}`} className={`post-art ${post.tone}`} aria-label={`Read ${post.title}`}><div className="post-art-ring"/><Icon name={post.icon} size={58}/><span>FINORA / THE ESSENTIALS</span></Link>
        <div className="archive-card-copy"><p className="story-category">{post.category.toUpperCase()}</p><h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3><p>{post.description}</p><div className="story-meta"><time dateTime={post.date}>{post.displayDate}</time><span>·</span>{readingMinutes(post)} min read</div><Link className="text-link" href={`/blog/${post.slug}`}>Read the story</Link></div>
      </article>)}</div>
    </section>

    <section className="learning-section" id="learn"><div className="home-container learning-inner"><div className="learning-intro"><p className="section-kicker">SMALL IDEAS. STRONGER FOUNDATIONS.</p><h2>Start with<br/><em>the essentials.</em></h2><p>A few useful concepts to make financial reading a little less complicated.</p></div><div className="learning-items">
      <details id="money-basics"><summary><span className="lesson-label">MONEY ESSENTIALS</span><span className="lesson-title">What is a budget?</span><span className="lesson-plus"><Icon name="plus"/></span></summary><p>A budget is a plan for how money comes in and goes out over a period of time. It brings income, spending, and saving into one view so you can see where your money goes.</p></details>
      <details id="market-basics"><summary><span className="lesson-label">MARKETS & INVESTING</span><span className="lesson-title">What is a financial market?</span><span className="lesson-plus"><Icon name="plus"/></span></summary><p>A financial market brings buyers and sellers together to exchange assets such as shares, bonds, or currencies. Prices reflect the orders and expectations of participants and can change over time.</p></details>
      <details><summary><span className="lesson-label">TRADING FUNDAMENTALS</span><span className="lesson-title">What does drawdown mean?</span><span className="lesson-plus"><Icon name="plus"/></span></summary><p>Drawdown describes a decline from an account’s previous peak. Trading programs may calculate daily and overall drawdown differently. The article above explains why those definitions matter when reviewing a prop firm.</p><Link href="/blog/prop-firm-review#how-does-prop-trading-work">Explore the trading guide</Link></details>
    </div></div></section>

    <section className="about-section home-container" id="about"><div><p className="section-kicker">HELLO, WE’RE FINORA</p><h2>Finance, with<br/><em>a little more clarity.</em></h2></div><div className="about-copy"><p>Finora is a space for curious minds to explore the world of finance. We bring together approachable explainers and in-depth guides, with room to look beyond the headline.</p><p>Our focus is understanding: the language, the mechanics, and the questions worth asking. Wherever you are in your learning journey, there’s always another perspective to discover.</p><div className="editorial-values"><span><Icon name="book" size={16}/>Clear explanations</span><span><Icon name="info" size={16}/>Thoughtful context</span><span><Icon name="shield" size={16}/>Transparent disclosures</span></div></div></section>
  </main>;
}
