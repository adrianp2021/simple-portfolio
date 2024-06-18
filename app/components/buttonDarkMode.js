import { useEffect, useState } from "react";
// import sun from "../../public/sun.svg"
// import moon from "../../public/moon.svg"



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

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  // toggle light - no styling/position yet
  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 bg-gray-200 dark:bg-gray-800 border rounded dark:text-offWhite text-black"
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ToggleButton;
