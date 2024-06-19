import Link from "next/link";

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
  return (
    <footer>
      <section className="">
        <div className="pb-5">
          <h2 className="text-2xl font-semibold text-black dark:text-yellow">
            Let's connect
          </h2>
        </div>
        <div className="container flex justify-between items-center text-base ">
          <div className="flex ">
            {socialMedia.map((social, i) => (
              <div
                key={i}
                className="mr-4 mb-6 dark:hover:text-yellow dark:text-offWhite text-black hover:text-neutral600 underline underline-offset-4"
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

          <div className="mb-6 ">
            <Link
              href="/contact"
              className="text-black dark:text-offWhite dark:hover:text-yellow hover:text-neutral600 underline underline-offset-4"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      <div className="text-center text-sm font-light text-black dark:text-offWhite border-t border-t-black dark:border-t-offWhite py-4">
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
