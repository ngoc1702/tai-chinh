import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Icon } from "../../ui-icons";
import { propGuide, propGuideMinutes } from "../../prop-guide";
import { ArticleTools, ReadingProgress, TableOfContents } from "../../reading-tools";

export const metadata: Metadata = {
  title: `${propGuide.title} | Finora`,
  description: propGuide.description,
  openGraph: {type: "article", title: propGuide.title, description: propGuide.description, publishedTime: `${propGuide.date}T00:00:00Z`},
};

export default function PropFirmReview() {
  return <><ReadingProgress/><main id="article" className="page-shell">
    <div className="breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/#insights">Insights</Link><span>/</span><span>Prop Trading</span></div>
    <div className="article-layout"><div className="main-column">
      <div className="eyebrow"><span className="category-dot"/>THE TRADER’S HANDBOOK<span className="edition">{propGuide.year} COLLECTION</span></div>
      <h1>What Is a Prop Firm?<br/><span>A Guide to Proprietary</span><br/>Trading in {propGuide.year}</h1>
      <p className="standfirst">{propGuide.description}</p>
      <div className="article-meta"><div className="author-avatar">F</div><div className="author-info"><strong>Finora Editorial</strong><span><time dateTime={propGuide.date}>{propGuide.displayDate}</time><b>·</b>{propGuideMinutes} min read</span></div><ArticleTools/></div>
      <figure className="hero-image"><Image src={propGuide.image} width={1200} height={676} alt={propGuide.imageAlt} preload sizes="(max-width: 800px) 100vw, 740px"/></figure>
      <div className="disclosure-line"><Icon name="info" size={18}/>An educational guide. All numerical examples are hypothetical.<Link href="#disclosures">Editorial & risk notice</Link></div>
      <article className="article-body">
        <div className="intro">{propGuide.intro.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
        <div className="takeaways"><div className="takeaway-title"><Icon name="sparkles" size={18}/>The key takeaways</div><ul>{propGuide.takeaways.map(item => <li key={item}>{item}</li>)}</ul></div>
        {propGuide.sections.map(section => <section key={section.id} id={section.id}>
          <h2>{section.title}</h2>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          {section.table && <div className="table-wrap"><table><caption className="sr-only">A comparison of proprietary and personal trading arrangements</caption><thead><tr>{section.table[0].map(cell => <th key={cell} scope="col">{cell}</th>)}</tr></thead><tbody>{section.table.slice(1).map(row => <tr key={row[0]}>{row.map((cell,index) => index === 0 ? <th key={cell} scope="row">{cell}</th> : <td key={cell}>{cell}</td>)}</tr>)}</tbody></table></div>}
          {section.faqs?.map(faq => <details key={faq.question}><summary>{faq.question}<span className="faq-toggle"><Icon name="plus" size={18}/></span></summary><p>{faq.answer}</p></details>)}
        </section>)}
        <section id="sources"><h2>Further Reading</h2><p>The <a href="https://www.investor.gov/introduction-investing/investing-basics/glossary/proprietary-trading" target="_blank" rel="noopener noreferrer">Investor.gov glossary</a> provides background on proprietary trading. The <a href="https://www.govinfo.gov/content/pkg/CFR-2013-title17-vol1/pdf/CFR-2013-title17-vol1-sec4-41.pdf" target="_blank" rel="noopener noreferrer">2013 text of CFTC Rule 4.41</a> explains limitations of hypothetical performance. These sources provide context rather than an endorsement of a provider.</p></section>
        <section id="disclosures"><h2>Editorial & Risk Notice</h2><p className="disclosure">This guide contains no provider referral offer. Account sizes, profit-sharing percentages, and results used in examples are hypothetical. They do not represent a verified offer available in 2019.</p><p className="disclosure">This content is for educational purposes and is not financial advice. Trading involves the possibility of losses, and compensation is not guaranteed. The rights and responsibilities of participants depend on the actual agreement and applicable requirements.</p></section>
        <div className="editorial-signoff"><span className="brand-mark" aria-hidden="true"><i/><i/><i/></span><div><strong>A clearer view. A smarter next step.</strong><p>Independent perspectives for the informed reader.</p></div></div>
      </article>
    </div><aside className="sidebar"><div className="sidebar-sticky">
      <TableOfContents items={propGuide.sections.map(section => ({id:section.id,title:section.title}))}/>
      <div className="offer-card"><span className="partner-label">THE FINORA READING COLLECTION</span><h3>Understand the<br/>whole picture.</h3><p>Explore money, markets, and risk through our collection of financial explainers.</p><Link className="offer-button" href="/#archive">Explore the 2019 collection</Link></div>
      <div className="sidebar-note"><Icon name="shield" size={25}/><div><strong>Read with perspective.</strong><p>Understand the terms.<br/>Question the assumptions.<br/>Know the limitations.</p></div></div>
    </div></aside></div>
  </main></>;
}
