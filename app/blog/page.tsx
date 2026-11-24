import type { Metadata } from "next";
import { articles } from "../catalog";
import { PageIntro } from "../content-ui";
import { ArticleLibrary } from "./article-library";
import Link from "next/link";
import { SiteFaq } from "../editorial-sections";

export const metadata: Metadata = {title:"The Journal | Skybet",description:"Browse Skybet's complete collection of articles on personal finance, financial markets, and proprietary trading."};
export default function Journal() {return <main className="home-container interior-page"><PageIntro eyebrow="The journal" title="Ideas, in perspective." description="Explore the mechanics of money and markets, or take a closer look at prop trading. Browse our 2019 reading collection by keyword or subject."/><div className="journal-introduction"><div><strong>The complete reading collection</strong><p>{articles.length} in-depth articles, with more concepts to explore across eight topic guides.</p></div><Link className="text-link" href="/topics">Browse topic guides</Link></div><ArticleLibrary items={articles}/><SiteFaq variant="journal"/></main>;}
