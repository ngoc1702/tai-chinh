import type { Metadata } from "next";
import "./finora.css";
import { SiteHeader, SiteFooter } from "./site-chrome";

export const metadata: Metadata = {
  title: "Finora | A Clearer Perspective on Finance",
  description: "Explore money, markets, and trading with Finora. Accessible financial education, thoughtful explainers, and in-depth reviews.",
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
