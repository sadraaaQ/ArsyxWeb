import { Link } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";

function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero" id="home">
      <div className="hero-content">

   <div className="hero-brand">
  {t("hero.brand")}<span>{t("hero.brandHighlight")}</span>
</div>

<p className="hero-label">
  {t("hero.label")}
</p>
        <h1 className="hero-title">
          {t("hero.title")}
          <span>{t("hero.titleHighlight")}</span>
        </h1>

        <p className="hero-description">
          {t("hero.description")}
        </p>

        <p className="hero-trust">
          {t("hero.trust")}
        </p>

        <div className="hero-actions">
          <a
            href="#projects"
            className="hero-btn hero-btn-secondary"
          >
            {t("hero.ctaSecondary")}
          </a>

          <Link
            to="/contact"
            className="hero-btn hero-btn-primary"
          >
            {t("hero.ctaPrimary")}
          </Link>
        </div>

      </div>

      <div className="hero-glow"></div>

      <div className="hero-scroll">
        <span></span>
        {t("hero.scroll")}
      </div>
    </section>
  );
}

export default Hero;
