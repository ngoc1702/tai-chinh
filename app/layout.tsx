import type { Metadata } from "next";
import "./finora.css";
import { SiteHeader, SiteFooter } from "./site-chrome";

export const metadata: Metadata = {
  title: "Finora | A Clearer Perspective on Finance",
  description: "Explore money, markets, and trading with Finora's 2019 reading collection. Clear financial explainers and in-depth educational guides.",
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
