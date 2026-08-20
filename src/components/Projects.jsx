import skxAhvaz from "../assets/projects/skx-ahvaz.png";
import weatherFlow from "../assets/projects/weather-flow.png";
import { motion } from 'framer-motion';
import { useLanguage } from "../hooks/useLanguage";

// Constants
const PROJECT_TYPES = {
  LIVE: 'live',
  PYTHON: 'python',
};

const TAG_MAP = {
  "E-commerce": "ui.tagEcommerce",
  "Desktop App": "ui.tagDesktopApp",
  "Weather API": "ui.tagWeatherApi",
};

// Project Data
const projects = [
  {
    number: "01",
    title: "SKX Ahvaz",
    description: {
      en: "An e-commerce platform built to deliver a modern and seamless online shopping experience.",
      fa: "یک فروشگاه اینترنتی برای SKX Ahvaz که با تمرکز بر تجربه خرید ساده، سریع و راحت طراحی شده است.",
    },
    tags: ["WordPress", "WooCommerce", "E-commerce"],
    link: "https://skxahwaz.ir/",
    image: skxAhvaz,
    type: PROJECT_TYPES.LIVE,
  },
  {
    number: "02",
    title: "Weather Flow",
    description: {
      en: "A simple and lightweight weather application built with Python to provide weather information in a clean and easy-to-use interface.",
      fa: "یک اپلیکیشن سبک و ساده با Python برای مشاهده اطلاعات آب‌وهوا در محیطی تمیز و راحت.",
    },
    tags: ["Weather API", "Desktop App"],
    link: null,
    image: weatherFlow,
    type: PROJECT_TYPES.PYTHON,
  },
  {
    number: "03",
    title: "SimpleTaskManager",
    description: {
      en: "A simple and lightweight task manager application built with Python to provide planing in a clean and easy-to-use interface.",
      fa: "یک ابزار ساده برای مدیریت وظایف که با Python ساخته شده و برای برنامه‌ریزی و پیگیری کارهای روزانه طراحی شده است.",
    },
    tags: ["Django ", "Desktop App"],
    link: null,
    image: null,
    type: PROJECT_TYPES.PYTHON,
  },
];

function Projects() {
  const { lang, t } = useLanguage();

  if (!projects || projects.length === 0) {
    return (
      <section className="projects" id="projects">
        <div className="container">
          <p className="no-projects-message">{t("projects.empty")}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header">
          <div>
            <p className="section-label">{t("projects.label")}</p>
            <h2 className="section-title">
              {t("projects.title")} <span>{t("projects.titleHighlight")}</span>
            </h2>
          </div>
          <p className="section-description">
            {t("projects.description")}
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <article className="project-card">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card-link"
                    aria-label={t("ui.visitProject")(project.title)}
                  >
                    <div className="project-image-wrapper">
                      <img
                        src={project.image}
                        alt={t("ui.projectImage")(project.title)}
                        className="project-image"
                        onError={(e) => {
                          e.target.src = '/placeholder-image.png';
                        }}
                        loading="lazy"
                      />
                      <div className="project-image-overlay">
                        <span>{t("projects.visitWebsite")} ↗</span>
                      </div>
                    </div>

                    <div className="project-info">
                      <div className="project-top">
                        <span className="project-number">{project.number}</span>
                        <span className="project-arrow">↗</span>
                      </div>

                      <div className="project-content">
                        <h3>{project.title}</h3>
                        <p>{typeof project.description === "object" ? project.description[lang] : project.description}</p>
                      </div>

                      <div className="project-tags">
                        {project.tags.map((tag, tagIndex) => (
                          <span key={`${project.number}-tag-${tagIndex}`}>{TAG_MAP[tag] ? t(TAG_MAP[tag]) : tag}</span>
                        ))}
                        <span className="project-live">
                          <span className="live-dot"></span>
                          {t("projects.statusLive")}
                        </span>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="project-card-nonlink">
                    <div className="project-image-wrapper">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={t("ui.projectImage")(project.title)}
                          className="project-image"
                          onError={(e) => {
                            e.target.src = '/placeholder-image.png';
                          }}
                          loading="lazy"
                        />
                      ) : (
                        <div className="project-image-placeholder">
                          <span>{project.title.charAt(0)}</span>
                        </div>
                      )}
                      <div className="project-image-overlay">
                        <span>{t("projects.pythonProject")}</span>
                      </div>
                    </div>

                    <div className="project-info">
                      <div className="project-top">
                        <span className="project-number">{project.number}</span>
                        <span className="project-arrow">↗</span>
                      </div>

                      <div className="project-content">
                        <h3>{project.title}</h3>
                        <p>{typeof project.description === "object" ? project.description[lang] : project.description}</p>
                      </div>

                      <div className="project-tags">
                        {project.tags.map((tag, tagIndex) => (
                          <span key={`${project.number}-tag-${tagIndex}`}>{TAG_MAP[tag] ? t(TAG_MAP[tag]) : tag}</span>
                        ))}
                        <span className="project-python">{t("projects.statusPython")}</span>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;