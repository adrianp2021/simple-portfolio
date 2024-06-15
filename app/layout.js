import { Inter } from "next/font/google";
import "./globals.css";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

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
      <body className={` mx-auto max-w-2xl px-5  leading-6`}>
        {children}
        <footer className=" text-neutral-400">
          <div className="text-center text-sm font-extralight border-t border-t-gray-800 py-4">
            <p>
              &copy; 2024 Adrian Pantea. All rights reserved. Icons by{" "}
              <span className="text-sm font-light decoration-0 underline underline-offset-4 text-orange-500 hover:text-orange-600">
                <a href="https://icons8.com/" target="_blank">
                  Icons8
                </a>
              </span>{" "}
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
