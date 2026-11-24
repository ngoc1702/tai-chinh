import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "../content-ui";
import { Icon } from "../ui-icons";
import { TopicIcon } from "../reference-media";
import { MoneyCalculator } from "../money-calculator";

export const metadata: Metadata = {title:"Financial Learning Center | Skybet",description:"Learn essential financial terms and follow reading paths through money, markets, and trading."};
const terms = [
  {term:"Budget",text:"A plan for money coming in and going out over a defined period. It describes expectations; a transaction record describes what actually happened."},
  {term:"Net income",text:"Income remaining after applicable deductions. It differs from gross income, which describes earnings before those deductions."},
  {term:"Fixed and variable expenses",text:"Fixed expenses tend to recur at a predictable amount. Variable expenses change with circumstances or use. Neither label determines whether an expense is necessary."},
  {term:"Bid, ask, and spread",text:"A bid is a buyer's offered price; an ask is a seller's requested price. The difference is the spread. A quoted price does not guarantee the price of a later transaction."},
  {term:"Liquidity",text:"The ability to transact without substantially affecting price. An asset's apparent value does not establish how quickly it can be exchanged at that value."},
  {term:"Volatility",text:"The extent of price changes over time. Volatility and liquidity describe different characteristics, even though market conditions can influence both."},
  {term:"Return",text:"A gain or loss expressed relative to a starting value, often as a percentage. The period, costs, and calculation method are essential context for reading a return."},
  {term:"Drawdown",text:"A decline from a previous account peak. An agreement may calculate loss limits from a different reference point, so drawdown and a program's maximum loss limit are not always interchangeable."},
  {term:"Simulated trading",text:"Hypothetical transactions recorded in a practice or evaluation environment. Results may differ from live trading because execution, liquidity, slippage, and the experience of financial loss can differ."},
  {term:"Profit share",text:"A contractual allocation of eligible performance. A percentage alone does not explain payment timing, deductions, eligibility, or any other conditions in the agreement."},
  {term:"Annual percentage rate (APR)",text:"An annualized interest rate. Credit agreements can apply different APRs to different balances, such as purchases or cash advances. Fees and other conditions need their own explanation."},
  {term:"Principal",text:"The amount borrowed or the part of a loan balance that remains to be repaid. A principal-and-interest payment can be different from a payment that includes other expenses."},
  {term:"Premium",text:"The price charged for insurance coverage under a policy. Its payment schedule and the conditions of renewal are part of the agreement."},
  {term:"Deductible",text:"An amount the policyholder may bear for a covered loss. The policy defines when it applies and whether it is expressed as an amount, a percentage, or another calculation."},
  {term:"Certificate of deposit",text:"A time deposit with a stated term. Its maturity date, early-withdrawal conditions, and renewal arrangements distinguish it from an everyday transaction account."},
  {term:"Closing costs",text:"Charges around completing a property or loan transaction. They can include lender charges and third-party services, and differ from the down payment itself."},
];

export default function LearnPage() {return <main className="home-container interior-page"><PageIntro eyebrow="Learning center" title="Clarity starts with the basics." description="A reference for the terms that appear throughout Skybet, with reading paths that connect short definitions to more detailed explanations."/>
  <section className="learning-paths"><h2>Choose a reading path</h2><div className="topic-grid">
    <div className="topic-card"><TopicIcon slug="money"/><h3>Everyday money</h3><p>Start with income and expenses, then explore how a budget brings expectations and records into one view.</p><Link className="text-link" href="/blog/understanding-your-money-2019">Read the budget guide</Link></div>
    <div className="topic-card"><TopicIcon slug="markets"/><h3>Markets in context</h3><p>Understand quoted prices and asset types before exploring liquidity, volatility, and the meaning of a chart.</p><Link className="text-link" href="/blog/how-financial-markets-work-2019">Read the markets guide</Link></div>
    <div className="topic-card"><TopicIcon slug="insurance"/><h3>Interpreting risk</h3><p>Look beyond a headline return to understand time periods, drawdown, and the limits of a numerical example.</p><Link className="text-link" href="/blog/risk-and-reward-2019">Read the risk explainer</Link></div>
  </div></section>
  <section className="glossary-section" id="glossary"><div className="section-heading"><div><p className="section-kicker">THE FINANCIAL GLOSSARY</p><h2>A reference for your reading.</h2></div><span className="journal-note">{terms.length} essential concepts</span></div><dl className="glossary-grid">{terms.map(item => <div key={item.term}><dt>{item.term}</dt><dd>{item.text}</dd></div>)}</dl></section>
  <section className="reader-faq"><h2>Using the learning center</h2><details><summary>Do I need trading experience?<span className="faq-toggle"><Icon name="plus"/></span></summary><p>No. The definitions and reading paths are written to introduce concepts. The trading review provides more detailed context where specific account terms become relevant.</p></details><details><summary>Are these definitions a personal financial plan?<span className="faq-toggle"><Icon name="plus"/></span></summary><p>No. They explain language and mechanics. They do not take account of an individual&apos;s circumstances or recommend a financial product.</p></details><details><summary>Where can I read more about a term?<span className="faq-toggle"><Icon name="plus"/></span></summary><p>Visit a topic collection for related concepts and articles, or search the journal for a keyword.</p><Link className="text-link" href="/blog">Search the journal</Link></details></section>
  <section className="content-section" id="calculators"><div className="section-heading"><div><p className="section-kicker">LEARN BY CHANGING THE NUMBERS</p><h2>Simple tools. A clearer picture.</h2></div></div><nav className="topic-jump-nav" aria-label="Choose a calculator"><a href="#calculator-growth">Savings growth</a><a href="#calculator-payment">Loan payments</a><a href="#calculator-budget">Monthly budget</a></nav><MoneyCalculator mode="growth"/><MoneyCalculator mode="payment"/><MoneyCalculator mode="budget"/></section>
  <div className="reading-panel"><div><h2>Ready for a closer look?</h2><p>Explore account models and evaluation terms in the original prop firm review.</p></div><Link className="primary-link" href="/blog/prop-firm-review">Read the prop firm review</Link></div>
  </main>;}
