import blocks from "./article.json";

const titles = ["What Is a Prop Firm?", "How Does Prop Trading Work?", "What Is FundedNext?", "Key Features of FundedNext", "FundedNext Discount Code: FXBONUS", "Benefits of Trading With a Prop Firm", "Risks and Disadvantages of Prop Trading", "Prop Trading vs. Personal Trading", "How to Choose the Best Prop Firm", "Is FundedNext Suitable for Beginners?", "Frequently Asked Questions About Prop Firms", "Final Thoughts: Is Prop Trading Worth It in 2019?"];
const slug = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/-$/,"");
const sections: {id: string; title: string; paragraphs: string[]}[] = [];
for (const block of blocks) {
  if(titles.includes(block)) sections.push({id:slug(block),title:block,paragraphs:[]});
  else if(sections.length) sections[sections.length-1].paragraphs.push(block);
}

export const propGuide = {
  title: "What Is a Prop Firm? A Complete Guide to Prop Trading in 2019",
  description: "How do prop firms work? Explore evaluation programs, their benefits and risks, and a closer look at FundedNext.",
  date: "2019-11-24",
  displayDate: "November 24, 2019",
  year: "2019",
  image: "/prop-firm-review.png",
  imageAlt: "Glowing purple trading cube above a blue and violet market chart",
  intro: blocks.slice(0,blocks.indexOf(titles[0])),
  sections,
  takeaways: [
    "Prop firms offer a structured way to demonstrate your trading skills.",
    "Many online programs use simulated accounts, with conditional rewards.",
    "Understand the fees, drawdown limits, and rules before you commit.",
  ],
};

export const propGuideMinutes = Math.ceil(blocks.join(" ").split(/\s+/).length / 220);
