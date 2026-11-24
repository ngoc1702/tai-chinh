import Link from "next/link";
export { SiteHeader } from "./site-header";

export function SiteFooter() {
  return <footer><div className="footer-inner">
    <Link className="brand" href="/">Fin<span>ora</span>.</Link>
    <p>A clearer perspective on money and markets.</p><span>© 2026 Finora</span>
    <Link className="footer-legal" href="/blog/prop-firm-review#disclosures">Disclosure & risk notice</Link>
    <p className="footer-disclaimer">For educational purposes. Content does not constitute financial advice.</p>
  </div></footer>;
}
