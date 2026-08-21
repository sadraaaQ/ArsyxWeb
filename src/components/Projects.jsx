import { Link } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

const HOME_PROJECTS_LIMIT = 3;

function Projects() {
  const { t } = useLanguage();

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
          {projects.slice(0, HOME_PROJECTS_LIMIT).map((project, index) => (
            <ProjectCard key={project.number} project={project} index={index} />
          ))}
        </div>

        <div className="projects-cta">
          <Link to="/projects" className="hero-btn hero-btn-primary">
            {t("projects.viewAll")} →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;
