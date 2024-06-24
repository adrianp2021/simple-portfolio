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
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="me1.png" size={48} type="/me1.png" />
        <meta name="theme-color" content="#000000" />
        <title>{metadata.title}</title>
      </head>
      <body
        className={`${nunito.className} mx-auto max-w-lg px-5 bg-lightBackground dark:bg-background min-h-screen `}
      >
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
