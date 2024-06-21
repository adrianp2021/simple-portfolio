import { Inter } from "next/font/google";
import "./globals.css";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.className}`}>
      
      <body
        className={`mx-auto max-w-xl px-5 bg-lightBackground dark:bg-background min-h-screen `}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
