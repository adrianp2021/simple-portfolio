"use client";
import Link from "next/link";
import { Figtree } from "next/font/google";

const figtree = Figtree({
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

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default function Footer() {
  return (
    <footer className="">
      <div className=" ">
        <h2 className={`${figtree.className} text-xl font-bold dark:text-offWhite text-black`}>
          Connect
        </h2>
      </div>
      <div className="justify-between block sm:flex ">
        <div>
          <h2 className="dark:text-neutral400 text-neutral800 mt-6 mb-2 font-semibold">
            Social
          </h2>
          <div className="text-sm flex font-light">
            {socialMedia.map((social, i) => (
              <div
                key={i}
                className=" mr-4 text-sm dark:hover:text-saffron dark:text-offWhite text-black hover:text-neutral600 underline underline-offset-4"
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
          <h2 className="dark:text-neutral400 text-neutral800 mt-6 mb-2 font-semibold">
            Pages
          </h2>
          <div className="font-light text-sm underline underline-offset-4  dark:text-offWhite text-black ">
            <Link
              className=" dark:hover:text-saffron hover:text-neutral600"
              href="/"
            >
              Home
            </Link>
            <Link
              className="mx-4 dark:hover:text-saffron hover:text-neutral600"
              href="/about"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="dark:hover:text-saffron hover:text-neutral600"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-end sm:justify-center  ">
        <button
          onClick={scrollToTop}
          className={`my-4 flex flex-col items-center px-2 py-2 rounded-full  bg-black hover:bg-neutral600 dark:bg-offWhite dark:text-black text-text dark:hover:bg-saffron `}
          role="button"
          aria-label="Back to the top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4"
          >
            <path
              fillRule="evenodd"
              d="M11.47 10.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 12.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M11.47 4.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 6.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
              clipRule="evenodd"
            />
          </svg>
          {/* <p className="text-xs">Top</p> */}
        </button>
      </div>

      <div className="text-center border-t-[0.5px] text-sm font-light text-black dark:text-offWhite border-t-black dark:border-t-offWhite py-4">
        <p>
          &copy; {new Date().getFullYear()} All rights reserved. Icons by{" "}
          <span className=" underline underline-offset-4 text-black dark:text-offWhite dark:hover:text-saffron hover:text-neutral600">
            <a href="https://icons8.com/" target="_blank">
              Icons8
            </a>
          </span>{" "}
        </p>
      </div>
    </footer>
  );
}
