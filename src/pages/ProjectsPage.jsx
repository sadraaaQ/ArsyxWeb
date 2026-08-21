import { useLanguage } from "../hooks/useLanguage";
import { usePageTitle } from "../hooks/usePageTitle";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function ProjectsPage() {
  const { t } = useLanguage();
  usePageTitle("Projects | Arsyx Web");

  return (
    <main>
      <section className="projects projects-page" id="projects">
        <div className="container">
          <div className="section-header">
            <div>
              <p className="section-label">{t("projects.label")}</p>
              <h2 className="section-title">
                {t("projects.pageTitle")} <span>{t("projects.titleHighlight")}</span>
              </h2>
            </div>
            <p className="section-description">
              {t("projects.description")}
            </p>
          </div>

          {projects.length === 0 ? (
            <p className="no-projects-message">{t("projects.empty")}</p>
          ) : (
            <div className="projects-grid">
              {projects.map((project, index) => (
                <ProjectCard key={project.number} project={project} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default ProjectsPage;
