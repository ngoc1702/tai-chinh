import { additionalPosts } from "./additional-posts";

export type Post = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  displayDate: string;
  topic: string;
  sections: {title: string; paragraphs: string[]}[];
  sources?: {title: string; url: string}[];
};

export const archivePosts: Post[] = [
  ...additionalPosts,
  {
    slug: "understanding-your-money-2019",
    title: "Understanding Your Money: The Building Blocks of a Budget",
    description: "Income, expenses, and the space between them. A clear introduction to the language of everyday money.",
    category: "Money essentials", date: "2019-03-14", displayDate: "March 14, 2019", topic: "money",
    sections: [
      {title: "A budget is a picture of movement", paragraphs: ["A bank balance describes money at a single moment. A budget describes how that money moves over time. It brings income and expenses together within a defined period, such as a week or a month.", "The purpose of that picture is understanding. Two people with the same income can have very different financial circumstances because their regular commitments, household needs, and payment schedules differ."]},
      {title: "Income is more than a headline number", paragraphs: ["Gross income is the amount earned before deductions. Net income is the amount remaining after deductions. A monthly plan based on gross income can describe money that is never actually available to spend.", "Timing matters too. A bill can fall due before an income payment arrives, even when total monthly income exceeds total expenses. A calendar and a budget describe different parts of the same picture."]},
      {title: "Fixed, variable, and occasional expenses", paragraphs: ["Fixed expenses tend to recur at a predictable amount. Variable expenses change with use or circumstance. Occasional expenses arrive less frequently, but they still affect the overall picture.", "These are descriptive categories rather than judgments about whether a purchase is good or bad. A necessary expense can be variable, and a discretionary subscription can be fixed."]},
      {title: "The difference between a plan and a record", paragraphs: ["A spending record describes what already happened. A budget describes what is expected to happen. Comparing the two can reveal a missed expense, a changed bill, or an assumption that no longer fits.", "A difference between planned and actual spending is information. It may reflect an unusual month, an incomplete estimate, or a change in circumstances. The numbers become more useful when the explanation is visible."]},
      {title: "Clarity comes before conclusions", paragraphs: ["A budget does not, by itself, increase income or remove a financial obligation. What it offers is a common view of the moving parts: money coming in, money going out, and the timing of each.", "Understanding those parts is the foundation for asking more precise questions about everyday finances. This article explains concepts and is not a personal financial plan."]},
    ],
  },
  {
    slug: "how-financial-markets-work-2019",
    title: "How Financial Markets Work: A Beginner’s Field Guide",
    description: "A closer look at buyers, sellers, prices, and the different roles financial markets play.",
    category: "Markets & investing", date: "2019-07-22", displayDate: "July 22, 2019", topic: "markets",
    sections: [
      {title: "A meeting place for buyers and sellers", paragraphs: ["A financial market connects participants who want to exchange financial assets. Those assets can include company shares, bonds, and currencies. The market provides a way for participants to communicate prices and complete transactions.", "A market is not a single opinion about value. It is the result of many participants acting on different information, expectations, and needs."]},
      {title: "What a quoted price actually tells you", paragraphs: ["A quoted price is tied to an instrument and a moment in time. The last traded price describes a completed transaction. It does not guarantee that another transaction can take place at exactly the same price.", "A bid is a price a buyer is offering. An ask is a price a seller is requesting. The difference between them is called the spread. These details help explain why a price on a screen and the price of an execution can differ."]},
      {title: "Different assets, different arrangements", paragraphs: ["A share represents an ownership interest in a company. A bond represents a borrowing arrangement with terms covering matters such as interest and repayment. Currency trading involves exchanging one currency for another.", "These instruments do not carry identical rights or risks. Understanding an asset involves looking beyond its chart to the arrangement that the instrument represents."]},
      {title: "Liquidity and volatility", paragraphs: ["Liquidity concerns the ability to transact without substantially affecting price. Volatility describes the extent of price movement. They describe different characteristics, even though market conditions can influence both.", "A market can be active and still experience sharp price changes. A quiet price history also does not establish that an asset can always be sold quickly at a particular price."]},
      {title: "A chart is a starting point", paragraphs: ["A chart organizes a series of prices into a visual record. Its appearance depends on the interval, scale, and data selected. A daily chart and a minute-by-minute chart show different views of the same instrument.", "Past prices describe past transactions. They do not establish what the next price will be. Market literacy begins with recognizing what each piece of information can tell you and where its limits lie."]},
    ],
  },
  {
    slug: "risk-and-reward-2019",
    title: "Risk and Reward: Looking Beyond the Headline Return",
    description: "Why a return figure tells only part of the story, and how the language of risk adds context.",
    category: "Money essentials", date: "2019-11-06", displayDate: "November 6, 2019", topic: "money",
    sections: [
      {title: "One result, several questions", paragraphs: ["A percentage return is a compact summary. It describes a change relative to a starting value, but it does not explain every part of the experience behind that change.", "To interpret a return, the period, calculation method, and treatment of costs all matter. A return measured over one month cannot be compared directly with a total return measured over several years."]},
      {title: "The path can matter as much as the destination", paragraphs: ["Two accounts can begin and end at the same values while taking very different paths between those points. One may change gradually while the other experiences substantial declines and recoveries.", "Drawdown describes a decline from a previous peak. It adds information about the path that a final return figure alone leaves out. Different reporting methods can measure drawdown at different intervals."]},
      {title: "Percentages are sensitive to their starting point", paragraphs: ["Consider an illustrative balance of $100. After a 20% decline, the balance is $80. A subsequent 20% increase brings it to $96, because the increase is calculated from a smaller starting value.", "Returning from $80 to $100 requires a 25% increase. This simple arithmetic explains why an equal percentage decline and gain do not cancel each other out."]},
      {title: "Risk has more than one dimension", paragraphs: ["Price movement is one kind of uncertainty. Other considerations include whether a transaction can be completed, whether a counterparty can meet an obligation, and whether the rules of an arrangement allow access to funds when expected.", "A familiar name or a smooth chart does not describe all of those considerations. The terms and mechanics of an arrangement are part of the context behind its advertised result."]},
      {title: "Read the result in context", paragraphs: ["A useful description of performance includes the measurement period, relevant costs, and the conditions under which the result occurred. Hypothetical examples and simulated results also need to be distinguished from actual transactions.", "The aim of financial literacy is to understand the question a number answers, rather than treating the number as a complete story. This explainer describes concepts and does not recommend a financial product or strategy."]},
    ],
  },
];

export function readingMinutes(post: Post) {
  return Math.max(1, Math.ceil(post.sections.flatMap(section => section.paragraphs).join(" ").split(/\s+/).length / 220));
}
