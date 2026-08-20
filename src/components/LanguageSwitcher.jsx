import { useLanguage } from "../hooks/useLanguage";

function LanguageSwitcher() {
  const { lang, t, toggleLang } = useLanguage();

  return (
    <button
      type="button"
      className="lang-switcher"
      onClick={toggleLang}
      aria-label={lang === "en" ? t("ui.switchToPersian") : t("ui.switchToEnglish")}
      aria-pressed={lang === "fa"}
    >
      <span className={`lang-option ${lang === "en" ? "active" : ""}`}>EN</span>
      <span className="lang-divider">/</span>
      <span className={`lang-option ${lang === "fa" ? "active" : ""}`}>FA</span>
    </button>
  );
}

export default LanguageSwitcher;
