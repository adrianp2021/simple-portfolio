// import { useState } from "react";
// const [darkMode, setDarkMode] = useState(false);

// const toggleDarkMode = () => {
//   setDarkMode(!darkMode);
// };

// export default function ButtonDarkMode() {
//   return (
//     <button
//       onClick={toggleDarkMode}
//       className="absolute w-16 h-16 bottom-16 right-16 bg-neutral-900 dark:bg-white  text-white dark:text-black"
//     >
//       {darkMode ? "light" : "dark"}
//     </button>
//   );
// }

import { useEffect, useState } from "react";

const ToggleButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // stores mode preference
  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light"); // Write a note saying you like it bright
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark"); // Write a note saying you like it dark
    }
    setDarkMode(!darkMode);
  };

  // toggle light
  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 bg-gray-200 dark:bg-gray-800 rounded dark:text-offWhite text-black"
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ToggleButton;
