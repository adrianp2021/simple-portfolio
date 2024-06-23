import { Inter } from "next/font/google";
import "./globals.css";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";

import { Nunito } from "next/font/google";

import Footer from "./components/footer";

const nunito = Nunito({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Adrian Pantea Portfolio",
  description: "My portfolio",
};

{
  /* <link rel="manifest" href="~/manifest.json"></link> */
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="gandalf.png" size={48} type="/gandalf.png" />
        <meta name="theme-color" content="#000000" />
        <title>{metadata.title}</title>
      </head>
      <body
        className={`${nunito.className} mx-auto max-w-lg px-5 bg-lightBackground dark:bg-background min-h-screen `}
      >
        <GoogleAnalytics gaId="G-75GKZZPWKE" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
