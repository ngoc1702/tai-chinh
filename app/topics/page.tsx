import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro, TopicLinks } from "../content-ui";
import { ReadingPaths, SiteFaq } from "../editorial-sections";

export const metadata: Metadata = {title:"Explore Financial Topics | Skybet",description:"Explore credit cards, banking, mortgages, personal loans, insurance, investing, personal finance, and trading with clear topic guides."};
export default function TopicsPage() {return <main className="home-container interior-page"><PageIntro eyebrow="Explore topics" title="Find your starting point." description="Each topic brings together an introduction, key concepts, questions to explore, and articles for a closer look. Choose the area you want to understand."/><TopicLinks/><ReadingPaths/><SiteFaq variant="topics"/><section className="reading-panel"><div><p className="section-kicker">NOT SURE WHERE TO BEGIN?</p><h2>Get familiar with the language.</h2><p>Our learning center explains recurring terms such as income, liquidity, drawdown, and simulated trading. Use it as a companion when you read the journal.</p></div><Link className="primary-link" href="/learn">Visit the learning center</Link></section></main>;}
