import { useLanguage } from "../hooks/useLanguage";

function WhyArsyx() {
  const { t } = useLanguage();
  const reasons = t("whyArsyx.items");

  return (
    <section className="why-arsyx" id="why-arsyx">
      <div className="container">

        <div className="section-header">
          <div>
            <p className="section-label">{t("whyArsyx.label")}</p>

            <h2 className="section-title">
              {t("whyArsyx.title")} <span>{t("whyArsyx.titleHighlight")}</span>
            </h2>
          </div>

          <p className="section-description">
            {t("whyArsyx.description")}
          </p>
        </div>

        <div className="why-arsyx-list">
          {reasons.map((reason) => (
            <div className="why-arsyx-item" key={reason.number}>

              <span className="why-arsyx-number">
                {reason.number}
              </span>

              <div className="why-arsyx-content">
                <h3>{reason.title}</h3>

                <p>{reason.description}</p>
              </div>

              <span className="why-arsyx-arrow">
                ↗
              </span>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyArsyx;
