import "./Project.css";
import type { ProjectItem } from "../../lib/data/data";

interface ProjectProps {
  project: ProjectItem;
  projectsTab?: ProjectItem[];
}

const Project = ({ project }: ProjectProps) => {
  return (
    <article className="global-project-box">
      <h3 className="project-title-box">{project.title}</h3>
      <p className="project-subtitle-box">{project.subtitle}</p>

      <div className="project-details">
        {project.title === "BnBair" ? (
          <div className="img-project-box">
            <video
              src={project.img}
              autoPlay
              loop
              muted
              playsInline
              className="img-project"
              aria-label={`Aperçu vidéo du projet ${project.title}`}
            />
          </div>
        ) : (
          <a
            className="img-project-box"
            href={project.url || "#"}
            onClick={(e) => {
              if (!project.url) e.preventDefault();
            }}
            aria-label={project.url ? `Voir le projet ${project.title}` : project.title}>
            <img
              src={project.img}
              alt={`Aperçu du projet ${project.title}`}
              className="img-project"
              loading="lazy"
            />
          </a>
        )}
        <div className="project-description-box">
          <div className="project-features">
            <span className="weigth">Technologies utilisées :</span>
            <p>{project.techno}</p>
          </div>
          <p className="project-features">
            <span className="weigth">Fonctionnalités mises en avant :</span>{" "}
            {project.features}
          </p>
          <div className="project-features-box">
            {project.githubFront && (
              <p className="project-features">
                <span className="weigth">Front-end :</span>{" "}
                {project.githubFront === "privé" ? (
                  <span>Repo privé</span>
                ) : (
                  <a
                    href={project.githubFront}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-features-link">
                    Voir le repo front-end sur GitHub
                  </a>
                )}
              </p>
            )}
            {project.githubBack && (
              <p className="project-features">
                <span className="weigth">Back-end :</span>{" "}
                {project.githubBack === "privé" ? (
                  <span>Repo privé</span>
                ) : (
                  <a
                    href={project.githubBack}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-features-link">
                    Voir le repo back-end sur GitHub
                  </a>
                )}
              </p>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Project;
