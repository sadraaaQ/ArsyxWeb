import { useLanguage } from "../hooks/useLanguage";

function Process() {
  const { t } = useLanguage();
  const steps = t("process.steps");

  return (
    <section className="process" id="process">
      <div className="container">

        <div className="section-header">
          <div>
            <p className="section-label">{t("process.label")}</p>

            <h2 className="section-title">
              {t("process.title")} <span>{t("process.titleHighlight")}</span>
            </h2>
          </div>

          <p className="process-description">
            {t("process.description")}
          </p>
        </div>

        <div className="process-list">
          {steps.map((step) => (
            <div className="process-item" key={step.number}>

              <span className="process-number">
                {step.number}
              </span>

              <div className="process-content">
                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>

              <span className="process-arrow">
                ↗
              </span>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Process;
