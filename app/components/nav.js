import ToggleButton from "./buttonDarkMode";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex justify-between items-end ">
      <ToggleButton />
      <div>
        <div className="font-light text-sm underline underline-offset-4 dark:text-offWhite text-black ">
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
    </nav>
  );
}
