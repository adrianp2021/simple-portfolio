import { Inter } from "next/font/google";
import "./globals.css";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";

import {
  Roboto,
  Montserrat,
  Merriweather,
  Poppins,
  Source_Sans_3,
} from "next/font/google";

import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Adrian Pantea Portfolio",
  description: "My portfolio",
  // metadata: `${(<link rel="manifest" href="~/manifest.json"></link>)}`,
};

{
  /* <link rel="manifest" href="~/manifest.json"></link> */
}

const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.className}`}>
      <body
        className={`mx-auto max-w-xl px-5 bg-lightBackground dark:bg-background min-h-screen `}
      >
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
        {children}
        <Footer />
      </body>
    </html>
  );
}
