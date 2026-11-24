import Image from "next/image";

const base="/assets/nerdwallet/images/";
export const referenceMedia={
  hero:`${base}hero-background.webp`, reader:`${base}reader.webp`,
  topics:{
    "credit-cards":{icon:`${base}credit-cards-icon.png`,image:`${base}credit-cards.webp`},
    banking:{icon:`${base}banking-icon.png`,image:`${base}banking.webp`},
    mortgages:{icon:`${base}mortgages-icon.png`,image:`${base}mortgages.webp`},
    loans:{icon:`${base}loans-icon.png`,image:`${base}personal-loans.webp`},
    insurance:{icon:`${base}insurance-icon.png`,image:`${base}insurance.webp`},
    markets:{icon:`${base}investing-icon.png`,image:`${base}investing.webp`},
    money:{icon:`${base}money-icon.png`,image:`${base}banking.webp`},
    trading:{icon:`${base}trading-icon.png`,image:`${base}investing.webp`},
  },
};

export function topicMedia(slug:string){return referenceMedia.topics[slug as keyof typeof referenceMedia.topics]||referenceMedia.topics.money;}
export function TopicIcon({slug,size=72}:{slug:string;size?:number}){return <Image className="topic-reference-icon" src={topicMedia(slug).icon} width={size} height={size} alt=""/>;}
export function articleMedia(slug:string, topic="money"){
  const illustrations:Record<string,{image:string;alt:string}>={
    'understanding-your-money-2019':{image:topicMedia('banking').image,alt:'A savings jar filled with banknotes'},
    'how-financial-markets-work-2019':{image:topicMedia('markets').image,alt:'A piggy bank on a spread of banknotes'},
    'risk-and-reward-2019':{image:topicMedia('insurance').image,alt:'An insurance illustration representing financial protection'},
  };return illustrations[slug] || {image:topicMedia(topic).image,alt:`${topic.replaceAll("-", " ")} financial illustration`};
}
