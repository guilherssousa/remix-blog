import { Link } from "@remix-run/react";

export default function Header({ themeName, toggleTheme }) {
  const toggleThemeHandler = () => {
    if (themeName === "light") {
      localStorage.setItem("@krteazy:theme", "dark");
      toggleTheme(true);
    } else {
      localStorage.setItem("@krteazy:theme", "light");
      toggleTheme(false);
    }
  };

  return (
    <header className="mx-8 flex items-center justify-between pt-6 md:pt-12">
      <div className="md:w-4/6">
        <Link to="/">
          <h1 className="font-bold text-xl md:text-3xl">
            krteazy's development journal
          </h1>
        </Link>
      </div>
      <div className="md:w-2/6 flex items-center justify-end font-bold gap-x-4 cursor-pointer">
        <a
          href="https://github.com/guilherssousa"
          target="_blank"
          ref="noreferrer"
          className="hidden md:inline-block"
        >
          Github
        </a>
        <a
          href="https://linkedin.com/in/guilhermedasilvasousa/"
          target="_blank"
          ref="noreferrer"
          className="hidden md:inline-block"
        >
          Linkedin
        </a>

        <button onClick={toggleThemeHandler} aria-label="Change color theme">
          {themeName === "light" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}
