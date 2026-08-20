import { useLanguage } from "../hooks/useLanguage";

function Services() {
  const { t } = useLanguage();
  const services = t("services.items");

  return (
    <section className="services" id="services">
      <div className="container">

        <div className="section-header">
          <div>
            <p className="section-label">
              {t("services.label")}
            </p>

            <h2 className="section-title">
              {t("services.title")} <span>{t("services.titleHighlight")}</span>
            </h2>
          </div>

          <p className="section-description">
            {t("services.description")}
          </p>
        </div>

        <div className="services-list">
          {services.map((service) => (
            <div
              className="service-item"
              key={service.number}
            >
              <span className="service-number">
                {service.number}
              </span>

              <div>
                <h3 className="service-title">
                  {service.title}
                </h3>

                <p className="service-description">
                  {service.description}
                </p>

                <div className="service-tags">
                  {service.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <span className="service-arrow">
                ↗
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;
