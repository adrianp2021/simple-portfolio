import { Inter } from "next/font/google";
import "./globals.css";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Adrian Pantea Portfolio",
  description: "My portfolio",
  // metadata: `${(<link rel="manifest" href="~/manifest.json"></link>)}`,
};

{
  /* <link rel="manifest" href="~/manifest.json"></link> */
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body
        className={`mx-auto max-w-xl px-5 leading-6 bg-lightBackground dark:bg-background min-h-screen `}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
