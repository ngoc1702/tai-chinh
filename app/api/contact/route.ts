import { mkdir, appendFile } from "node:fs/promises";
import { join } from "node:path";
import { randomUUID } from "node:crypto";

const topics=new Set(["editorial","suggestion","website","partnership","other"]);
export async function POST(request:Request){
  const origin=request.headers.get("origin");
  if(origin && origin!==new URL(request.url).origin) return Response.json({error:"Please submit the form from this website."},{status:403});
  if(!request.headers.get("content-type")?.includes("application/json")) return Response.json({error:"Please send a JSON form submission."},{status:415});
  try {
    // Bound the stream itself: Content-Length can be missing or inaccurate.
    const reader=request.body?.getReader();
    if(!reader) return Response.json({error:"Your message is empty."},{status:400});
    let size=0;const chunks:Uint8Array[]=[];
    while(true){const {done,value}=await reader.read();if(done) break;size+=value.length;if(size>32768){await reader.cancel();return Response.json({error:"Your message is too large."},{status:413});}chunks.push(value);}
    let data:Record<string,unknown>;
    try {data=JSON.parse(Buffer.concat(chunks).toString("utf8"));}catch{return Response.json({error:"The submission could not be read."},{status:400});}
    if(!data || typeof data!=="object" || Array.isArray(data)) return Response.json({error:"Please check the form fields."},{status:400});
    const field=(key:string)=>typeof data[key]==="string" ? (data[key] as string).trim() : "";
    const name=field("name"),email=field("email"),topic=field("topic"),subject=field("subject"),message=field("message");
    if(field("website")) return Response.json({error:"The submission could not be accepted."},{status:400});
    if(name.length<2 || name.length>100 || email.length>254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !topics.has(topic) || subject.length<3 || subject.length>150 || message.length<20 || message.length>5000 || field("consent")!=="yes") return Response.json({error:"Please complete every required field with valid details and accept the privacy notice."},{status:400});
    const reference=randomUUID();const directory=join(process.cwd(),".data");
    await mkdir(directory,{recursive:true});
    await appendFile(join(directory,"contact-messages.ndjson"),JSON.stringify({reference,receivedAt:new Date().toISOString(),name,email,topic,subject,message,consent:true})+"\n",{encoding:"utf8",mode:0o600});
    return Response.json({reference},{status:201});
  }catch{return Response.json({error:"Your message could not be saved. Please try again later."},{status:500});}
}
