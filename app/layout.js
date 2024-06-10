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
      <body className={`mx-auto max-w-2xl px-5`}>
        {children}
        <footer className="  text-white">
          <div className="text-center text-sm font-extralight border-t py-4">
            <p>
              &copy; 2024 Adrian Pantea. All rights reserved. Icons by{" "}
              <span className="text-sm font-light decoration-1 underline underline-offset-4 text-gray-400 hover:text-orange-400">
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
