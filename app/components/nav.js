import ToggleButton from "./buttonDarkMode";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex justify-between items-end ">
      <ToggleButton />
      <div>
        <div className="font-normal text-sm underline underline-offset-4  dark:text-offWhite text-black ">
          <Link
            className=" dark:hover:text-yellow hover:text-neutral600"
            href="/"
          >
            /home
          </Link>
          <Link
            className="mx-4 dark:hover:text-yellow hover:text-neutral600"
            href="/about"
          >
            /about
          </Link>
          <Link
            href="/contact"
            className="dark:hover:text-yellow hover:text-neutral600"
          >
            /contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
