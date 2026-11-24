"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [state,setState] = useState<"idle"|"sending"|"success"|"error">("idle");
  const [message,setMessage] = useState("");
  async function submit(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    if(state==="sending") return;
    const form=event.currentTarget;
    const data=new FormData(form);
    setState("sending");setMessage("");
    try {
      const response=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object.fromEntries(data))});
      const result=await response.json();
      if(!response.ok) throw new Error(result.error || "Your message could not be saved. Please try again.");
      setState("success");setMessage(`Your message has been saved. Your reference is ${result.reference}.`);form.reset();
    } catch(error){setState("error");setMessage(error instanceof Error ? error.message : "A connection error occurred. Please try again.");}
  }
  return <form className="contact-form" onSubmit={submit} aria-labelledby="contact-form-title">
    <p className="section-kicker">WE&apos;RE LISTENING</p><h2 id="contact-form-title">Send us a message.</h2><p className="contact-form-intro">Have a suggestion, spotted a detail, or need help finding a guide? Start here.</p>
    <div className="contact-form-row"><label htmlFor="contact-name">Your name *<input id="contact-name" name="name" autoComplete="name" required minLength={2} maxLength={100} placeholder="Alex Taylor"/></label><label htmlFor="contact-email">Email address *<input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@example.com"/></label></div>
    <label htmlFor="contact-topic">What is this about? *<select id="contact-topic" name="topic" defaultValue="" required><option value="" disabled>Select a subject</option><option value="editorial">Article question or correction</option><option value="suggestion">Suggest a topic</option><option value="website">Website support</option><option value="partnership">Partnership inquiry</option><option value="other">Something else</option></select></label>
    <label htmlFor="contact-subject">Subject *<input id="contact-subject" name="subject" required minLength={3} maxLength={150} placeholder="A little context for your message"/></label>
    <label htmlFor="contact-message">Your message *<textarea id="contact-message" name="message" required minLength={20} maxLength={5000} rows={7} placeholder="Tell us what you have in mind. For an article correction, include the page title or URL."/></label><p className="field-hint">20–5,000 characters. Please leave out passwords, account numbers, and financial documents.</p>
    <div className="contact-honeypot" aria-hidden="true"><label>Leave this field empty<input name="website" tabIndex={-1} autoComplete="off"/></label></div>
    <label className="contact-consent"><input type="checkbox" name="consent" value="yes" required/><span>I agree that my submitted details may be stored to handle this inquiry. <Link href="/privacy">Read the privacy notice</Link>.</span></label>
    <button className="primary-link contact-submit" type="submit" disabled={state==="sending"}>{state==="sending" ? "Saving your message…" : "Send message"}<span aria-hidden="true">→</span></button>
    <p className="field-hint">Required fields are marked *. This preview saves messages on this website; email delivery is not connected.</p>
    {message && <div className={`contact-feedback ${state}`} role={state==="error" ? "alert" : "status"}>{message}</div>}
  </form>;
}
