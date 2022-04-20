import { useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  const [isDarkTheme, toggleTheme] = useState(true);

  useEffect(() => {
    var isDarkMode = localStorage.getItem("@krteazy:theme") === "dark";
    if (!localStorage.getItem("@krteazy:theme")) {
      localStorage.setItem("@krteazy:theme", "dark");
      isDarkMode = true;
    }
    toggleTheme(isDarkMode);
  }, []);

  return (
    <div className={isDarkTheme && "dark"}>
      <div className="text-gray-900 bg-white dark:bg-zinc-900 dark:text-gray-200 min-h-screen antialiased transition-colors ease-in-out">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <Header
            toggleTheme={toggleTheme}
            themeName={isDarkTheme ? "dark" : "light"}
          />
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
}
