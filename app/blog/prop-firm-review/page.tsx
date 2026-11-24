import Image from "next/image";
import { Icon } from "../../ui-icons";
import type { Metadata } from "next";
import blocks from "../../article.json";
import { ArticleTools, CopyCode, ReadingProgress, TableOfContents } from "../../reading-tools";

export const metadata: Metadata = {
  title: "What Is a Prop Firm? A Complete Guide | Finora",
  description: "A complete guide to prop trading, evaluation challenges, FundedNext, and the benefits and risks of funded trading programs.",
};

const headings = ["What Is a Prop Firm?", "How Does Prop Trading Work?", "What Is FundedNext?", "Key Features of FundedNext", "FundedNext Discount Code: FXBONUS", "Benefits of Trading With a Prop Firm", "Risks and Disadvantages of Prop Trading", "Prop Trading vs. Personal Trading", "How to Choose the Best Prop Firm", "Is FundedNext Suitable for Beginners?", "Frequently Asked Questions About Prop Firms", "Final Thoughts: Is Prop Trading Worth It in 2026?"];
const subheadings = ["Access to Larger Simulated Trading Accounts", "Structured Risk Management", "Performance-Based Earning Opportunities", "Opportunities to Develop Trading Discipline", "Evaluation Fees", "Strict Drawdown Limits", "No Guaranteed Earnings", "Simulated Trading Limitations", "Provider and Regulatory Risks", "Transparent Trading Rules", "Reasonable Evaluation Costs", "Clear Reward Policies", "Platform Compatibility", "Customer Support and Reputation", "Legal and Geographic Eligibility"];
const slug = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-$/, "");
const sections: { title: string; paragraphs: string[] }[] = [];
for (const block of blocks) {
  if (headings.includes(block)) sections.push({ title: block, paragraphs: [] });
  else if (sections.length) sections[sections.length - 1].paragraphs.push(block);
}
const intro = blocks.slice(0, blocks.indexOf(headings[0]));
const referral = "https://fundednext.com/?fpr=FXBONUS";

function Paragraph({ text }: { text: string }) {
  if (text.startsWith("Feature\t")) {
    const rows = text.split(/\r?\n/).map(row => row.split("\t"));
    return <div className="table-wrap"><table><thead><tr>{rows[0].map(cell => <th key={cell}>{cell}</th>)}</tr></thead><tbody>{rows.slice(1).map(row => <tr key={row[0]}>{row.map(cell => <td key={cell}>{cell}</td>)}</tr>)}</tbody></table></div>;
  }
  if (/^Step \d|^\d\. /.test(text) || subheadings.includes(text)) return <h3>{text}</h3>;
  if (text.startsWith("Important:") || text.startsWith("It is important to understand")) return <aside className="article-note"><Icon name="info" size={18}/><p>{text}</p></aside>;
  if (text.includes("\n")) return <ul>{text.split(/\r?\n/).map(line => <li key={line}>{line}</li>)}</ul>;
  if (text.startsWith("https://") || text.startsWith("Explore FundedNext:")) return <p><a href={referral} target="_blank" rel="sponsored noopener noreferrer">Explore FundedNext</a></p>;
  if (text.startsWith("Affiliate Disclosure:") || text.startsWith("Risk Disclaimer:")) return <p id={text.startsWith("Affiliate") ? "disclosures" : undefined} className="disclosure">{text}</p>;
  return <p>{text}</p>;
}

export default function PropFirmReview() {
  return <>
    <ReadingProgress />
    <main id="article" className="page-shell">
      <div className="breadcrumb"><a href="/">Home</a><span>/</span><a href="/#insights">Insights</a><span>/</span><span>Prop Trading</span></div>
      <div className="article-layout">
        <div className="main-column">
          <div className="eyebrow"><span className="category-dot"/> THE TRADER’S HANDBOOK <span className="edition">2026 EDITION</span></div>
          <h1>What Is a Prop Firm?<br/><span>A Complete Guide to</span><br/>Prop Trading in 2026</h1>
          <p className="standfirst">Bigger opportunities start with a better understanding. Explore how prop firms work, what to look for, and where FundedNext fits in.</p>
          <div className="article-meta"><div className="author-avatar">F</div><div className="author-info"><strong>Finora Editorial</strong><span><time dateTime="2019-11-24">November 24, 2019</time> <b>·</b> {Math.ceil(blocks.join(" ").split(/\s+/).length / 220)} min read</span></div><ArticleTools /></div>
          <figure className="hero-image"><Image src="/prop-firm-review.png" width={600} height={338} alt="Glowing purple trading cube above a blue and violet market chart" preload sizes="(max-width: 800px) 100vw, 740px"/><figcaption><span>THE WORLD OF PROP TRADING</span><span>Knowledge is your first advantage.</span></figcaption></figure>
          <div className="disclosure-line"><Icon name="info" size={18}/> Independent insights. This article contains affiliate links. <a href="#disclosures">Read disclosure</a></div>
          <article className="article-body">
            <div className="intro">{intro.map(text => <p key={text}>{text}</p>)}</div>
            <div className="takeaways"><div className="takeaway-title"><Icon name="sparkles" size={18}/> The key takeaways</div><ul><li>Prop firms offer a structured way to demonstrate your trading skills.</li><li>Many online programs use simulated accounts, with conditional rewards.</li><li>Understand the fees, drawdown limits, and rules before you commit.</li></ul></div>
            {sections.map(section => <section id={slug(section.title)} key={section.title}>
              <h2>{section.title}</h2>
              {section.title === "FundedNext Discount Code: FXBONUS" && <div className="inline-offer"><div><span className="small-label">THE CODE TO CHECK AT CHECKOUT</span><strong>FXBONUS</strong></div><CopyCode /></div>}
              {section.title === "Frequently Asked Questions About Prop Firms" ? (() => {
                const lines = section.paragraphs.flatMap(p => p.split(/\r?\n/));
                const faqs: {question: string; answer: string[]}[] = [];
                for (const line of lines) {
                  if (line.endsWith("?")) faqs.push({question: line, answer: []});
                  else if (faqs.length) faqs[faqs.length-1].answer.push(line);
                }
                return faqs.map(faq => <details key={faq.question}><summary>{faq.question}<span className="faq-toggle"><Icon name="plus" size={18}/></span></summary>{faq.answer.map(answer => <Paragraph key={answer} text={answer}/>)}</details>);
              })() : section.paragraphs.map(text => <Paragraph key={text} text={text} />)}
            </section>)}
            <div className="editorial-signoff"><span className="brand-mark"><i/><i/><i/></span><div><strong>A clearer view. A smarter next step.</strong><p>Independent perspectives for the informed trader.</p></div></div>
          </article>
        </div>
        <aside className="sidebar"><div className="sidebar-sticky">
          <TableOfContents items={headings.map(title => ({id: slug(title), title}))}/>
          <div className="offer-card"><div className="offer-top"><span className="funded-wordmark">FundedNext</span><span className="partner-label">REFERRAL OFFER</span></div><h3>Your next chapter<br/>in trading.</h3><p>Explore FundedNext’s CFD & futures trading challenges.</p><div className="discount"><strong>30<span>%</span></strong><div>ADVERTISED DISCOUNT<br/><b>on eligible challenges</b></div></div><div className="coupon"><div><span>PROMO CODE</span><strong>FXBONUS</strong></div><CopyCode /></div><a className="offer-button" href={referral} target="_blank" rel="sponsored noopener noreferrer">Explore FundedNext</a><p className="offer-fine">Subject to availability. Confirm the offer and terms at checkout.</p></div>
          <div className="sidebar-note"><Icon name="shield" size={25}/><div><strong>Trade informed.</strong><p>Understand the rules.<br/>Manage your risk.<br/>Build your edge.</p></div></div>
        </div></aside>
      </div>
    </main>
  </>;
}
