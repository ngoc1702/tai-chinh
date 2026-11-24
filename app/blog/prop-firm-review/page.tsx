import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Icon } from "../../ui-icons";
import { propGuide, propGuideMinutes } from "../../prop-guide";
import { ArticleTools, CopyCode, ReadingProgress, TableOfContents } from "../../reading-tools";

export const metadata: Metadata = {
  title: `${propGuide.title} | Finora`, description: propGuide.description,
  openGraph: {type:"article",title:propGuide.title,description:propGuide.description,publishedTime:`${propGuide.date}T00:00:00Z`},
};

const referral = "https://fundednext.com/?fpr=FXBONUS";
const subheadings = ["Access to Larger Simulated Trading Accounts", "Structured Risk Management", "Performance-Based Earning Opportunities", "Opportunities to Develop Trading Discipline", "Evaluation Fees", "Strict Drawdown Limits", "No Guaranteed Earnings", "Simulated Trading Limitations", "Provider and Regulatory Risks", "Transparent Trading Rules", "Reasonable Evaluation Costs", "Clear Reward Policies", "Platform Compatibility", "Customer Support and Reputation", "Legal and Geographic Eligibility", "How to Use the FundedNext Promo Code"];

function Paragraph({text}: {text: string}) {
  if(text.startsWith("Feature\t")) {
    const rows = text.split(/\r?\n/).map(row => row.split("\t"));
    return <div className="table-wrap"><table><thead><tr>{rows[0].map(cell => <th scope="col" key={cell}>{cell}</th>)}</tr></thead><tbody>{rows.slice(1).map(row => <tr key={row[0]}>{row.map(cell => <td key={cell}>{cell}</td>)}</tr>)}</tbody></table></div>;
  }
  if(/^Step \d|^\d\. /.test(text) || subheadings.includes(text)) return <h3>{text}</h3>;
  if(text.startsWith("Important:") || text.startsWith("It is important to understand")) return <aside className="article-note"><Icon name="info" size={18}/><p>{text}</p></aside>;
  if(text.startsWith("Affiliate Disclosure:") || text.startsWith("Risk Disclaimer:")) return <p id={text.startsWith("Affiliate") ? "disclosures" : undefined} className="disclosure">{text}</p>;
  if(text.includes(referral)) {
    const [before,after] = text.split(referral);
    return <p>{before}<a href={referral} target="_blank" rel="sponsored noopener noreferrer">{referral}</a>{after}</p>;
  }
  return <p>{text}</p>;
}

function FAQs({paragraphs}: {paragraphs: string[]}) {
  const questions: {question: string; answer: string[]}[] = [];
  for(const text of paragraphs) {
    if(text.endsWith("?")) questions.push({question:text,answer:[]});
    else if(questions.length) questions[questions.length-1].answer.push(text);
  }
  return questions.map(faq => <details key={faq.question}><summary>{faq.question}<span className="faq-toggle"><Icon name="plus" size={18}/></span></summary>{faq.answer.map(text => <Paragraph key={text} text={text}/>)}</details>);
}

export default function PropFirmReview() {
  return <><ReadingProgress/><main id="article" className="page-shell">
    <div className="breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/#insights">Insights</Link><span>/</span><span>Prop Trading</span></div>
    <div className="article-layout"><div className="main-column">
      <div className="eyebrow"><span className="category-dot"/>THE TRADER’S HANDBOOK<span className="edition">{propGuide.year} EDITION</span></div>
      <h1>What Is a Prop Firm?<br/><span>A Complete Guide to</span><br/>Prop Trading in {propGuide.year}</h1>
      <p className="standfirst">Bigger opportunities start with a better understanding. Explore how prop firms work, what to look for, and where FundedNext fits in.</p>
      <div className="article-meta"><div className="author-avatar">F</div><div className="author-info"><strong>Finora Editorial</strong><span><time dateTime={propGuide.date}>{propGuide.displayDate}</time><b>·</b>{propGuideMinutes} min read</span></div><ArticleTools/></div>
      <figure className="hero-image"><Image src={propGuide.image} width={600} height={338} alt={propGuide.imageAlt} preload sizes="(max-width: 800px) 100vw, 740px"/><figcaption><span>THE WORLD OF PROP TRADING</span><span>Knowledge is your first advantage.</span></figcaption></figure>
      <div className="disclosure-line"><Icon name="info" size={18}/>Independent insights. This article contains affiliate links.<Link href="#disclosures">Read disclosure</Link></div>
      <article className="article-body">
        <div className="intro">{propGuide.intro.map(text => <p key={text}>{text}</p>)}</div>
        <div className="takeaways"><div className="takeaway-title"><Icon name="sparkles" size={18}/>The key takeaways</div><ul>{propGuide.takeaways.map(item => <li key={item}>{item}</li>)}</ul></div>
        {propGuide.sections.map(section => <section key={section.id} id={section.id}>
          <h2>{section.title}</h2>
          {section.title === "FundedNext Discount Code: FXBONUS" && <div className="inline-offer"><div><span className="small-label">THE CODE TO CHECK AT CHECKOUT</span><strong>FXBONUS</strong></div><CopyCode/></div>}
          {section.title === "Frequently Asked Questions About Prop Firms" ? <FAQs paragraphs={section.paragraphs}/> : section.paragraphs.map(text => <Paragraph key={text} text={text}/>)}
        </section>)}
        <div className="editorial-signoff"><span className="brand-mark" aria-hidden="true"><i/><i/><i/></span><div><strong>A clearer view. A smarter next step.</strong><p>Independent perspectives for the informed trader.</p></div></div>
      </article>
    </div><aside className="sidebar"><div className="sidebar-sticky">
      <TableOfContents items={propGuide.sections.map(section => ({id:section.id,title:section.title}))}/>
      <div className="offer-card"><div className="offer-top"><span className="funded-wordmark">FundedNext</span><span className="partner-label">REFERRAL OFFER</span></div><h3>Your next chapter<br/>in trading.</h3><p>Explore FundedNext’s CFD & futures trading challenges.</p><div className="discount"><strong>30<span>%</span></strong><div>ADVERTISED DISCOUNT<br/><b>on eligible challenges</b></div></div><div className="coupon"><div><span>PROMO CODE</span><strong>FXBONUS</strong></div><CopyCode/></div><a className="offer-button" href={referral} target="_blank" rel="sponsored noopener noreferrer">Explore FundedNext</a><p className="offer-fine">Subject to availability. Confirm the offer and terms at checkout.</p></div>
      <div className="sidebar-note"><Icon name="shield" size={25}/><div><strong>Trade informed.</strong><p>Understand the rules.<br/>Manage your risk.<br/>Build your edge.</p></div></div>
    </div></aside></div>
  </main></>;
}
