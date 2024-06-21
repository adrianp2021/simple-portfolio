"use client";
import Link from "next/link";
import { Montserrat, Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});
const montserrat = Montserrat({
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
});

const socialMedia = [
  {
    name: "Email",
    recipient: "mailto:adrianpantea10@gmail.com",
    ariaLabel: "Email Adrian Pantea",
  },
  {
    name: "GitHub",
    recipient: "https://github.com/adrianp2021",
    ariaLabel: "GitHub Profile",
  },
  {
    name: "LinkedIn",
    recipient: "https://www.linkedin.com/in/adrian-pantea/",
    ariaLabel: "LinkedIn Profile",
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer>
      {/* <div className="text-center border-gray-300 border-t border-t-neutral600 dark:border-t-neutral600" /> */}
      <div className=" dark:text-offWhite text-black">
        <h2
          className={`${montserrat.className} text-xl font-extrabold dark:text-yellow`}
        >
          Connect
        </h2>
      </div>
      {/* <div> */}
      <div className="justify-between block sm:flex ">
        <div className="">
          <h2 className="dark:text-offWhite text-neutral800 mt-6 mb-2 font-semibold">
            Links
          </h2>
          <div className="text-sm flex ">
            {socialMedia.map((social, i) => (
              <div
                key={i}
                className=" mr-4 font-normal text-sm dark:hover:text-yellow dark:text-neutral300 text-neutral600 hover:text-neutral600 underline underline-offset-4"
              >
                <a
                  href={social.recipient}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${social.name} profile`}
                >
                  {social.name}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className=" dark:text-offWhite text-neutral800 mt-6 mb-2 font-semibold">
            Pages
          </h2>
          <div>
            <Link
              className="font-normal text-sm dark:hover:text-yellow dark:text-neutral300 text-neutral600 hover:text-neutral600 underline underline-offset-4"
              href="/"
            >
              Home
            </Link>
            <Link
              className="mx-4 font-normal text-sm dark:hover:text-yellow dark:text-neutral300 text-neutral600 hover:text-neutral600 underline underline-offset-4"
              href="/about"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="font-normal text-sm dark:hover:text-yellow dark:text-neutral300 text-neutral600 hover:text-neutral600 underline underline-offset-4"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-end sm:justify-center ">
        <button
          onClick={scrollToTop}
          className="flex justify-center rounded transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="my-6 size-7 dark:bg-black rounded-full bg-black hover:bg-neutral600 dark:hover:text-yellow transition-colors"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div className="text-center border-t-[0.5px] text-sm font-light text-black dark:text-offWhite border-t-black dark:border-t-offWhite py-4">
        <p>
          &copy; 2024 All rights reserved. Icons by{" "}
          <span className=" underline underline-offset-4 text-black dark:text-offWhite dark:hover:text-yellow hover:text-neutral600">
            <a href="https://icons8.com/" target="_blank">
              Icons8
            </a>
          </span>{" "}
        </p>
      </div>
    </footer>
  );
}
