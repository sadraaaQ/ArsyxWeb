import { useEffect, useState } from "react";
import { useLanguage } from "../hooks/useLanguage";

function ThemeToggle() {
  const { t } = useLanguage();
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark"
    );
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={
        theme === "dark"
          ? t("ui.switchToLight")
          : t("ui.switchToDark")
      }
      aria-pressed={theme === "light"}
    >
      <span>{theme === "dark" ? "☀" : "☾"}</span>
    </button>
  );
}

export default ThemeToggle;
