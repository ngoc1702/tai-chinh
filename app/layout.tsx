import type { Metadata } from "next";
import "./site.css";
import { SiteHeader, SiteFooter } from "./site-chrome";

export const metadata: Metadata = {
  title: "Skybet | A Clearer Perspective on Finance",
  description: "Understand credit cards, banking, mortgages, loans, insurance, and investing with Skybet. Clear guides for your next financial decision.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
      <body><SiteHeader />{children}<SiteFooter /></body>
    </html>
  );
}
