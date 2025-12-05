import { Inter } from "next/font/google";
import "./globals.css";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}',{
          page_path: window.location.pathname
        });
      `}
      </Script>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="g1.png" sizes="60x60" type="image/png" />
        <meta name="theme-color" content="#000000" />
        <title>{metadata.title}</title>
      </head>
      <body
        className={`${nunito.className} mx-auto max-w-lg px-5 bg-lightBackground dark:bg-background min-h-screen flex flex-col`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
