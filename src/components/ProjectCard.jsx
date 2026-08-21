import { motion } from 'framer-motion';
import { useLanguage } from "../hooks/useLanguage";
import { TAG_MAP } from "../data/projects";

function ProjectCard({ project, index }) {
  const { lang, t } = useLanguage();

  return (
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
  );
}

export default ProjectCard;
