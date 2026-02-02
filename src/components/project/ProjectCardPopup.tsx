import { useEffect } from "react";
import type { ProjectItem } from "../../lib/data/data";
import "./ProjectCardPopup.css";

interface ProjectCardPopupProps {
  project: ProjectItem;
  onClose: () => void;
}

const ProjectCardPopup = ({ project, onClose }: ProjectCardPopupProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="project-card-popup-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
      aria-describedby="popup-desc">
      <div
        className="project-card-popup-outer"
        onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="project-card-popup-close"
          onClick={onClose}
          aria-label="Fermer">
          ×
        </button>
        <div className="project-card-popup">
        <h2 id="popup-title" className="project-card-popup-title">
          {project.title}
        </h2>
        {project.subtitle && (
          <p className="project-card-popup-subtitle">{project.subtitle}</p>
        )}

        <div className="project-card-popup-media">
          {project.title === "BnBair" ? (
            <div className="project-card-popup-img-wrap">
              <video
                src={project.img}
                autoPlay
                loop
                muted
                playsInline
                className="project-card-popup-img"
                aria-label={`Aperçu vidéo du projet ${project.title}`}
              />
            </div>
          ) : project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-popup-img-wrap project-card-popup-img-link"
              aria-label={`Voir le projet ${project.title}`}>
              <span className="project-card-popup-img-hint" aria-hidden="true">
                Voir le projet
              </span>
              <img
                src={project.img}
                alt={`Aperçu du projet ${project.title}`}
                className="project-card-popup-img"
              />
            </a>
          ) : (
            <div className="project-card-popup-img-wrap">
              <img
                src={project.img}
                alt={`Aperçu du projet ${project.title}`}
                className="project-card-popup-img"
              />
            </div>
          )}
        </div>

        <div id="popup-desc" className="project-card-popup-body">
          {project.techno && (
            <div className="project-card-popup-block">
              <span className="project-card-popup-label">
                Technologies utilisées :
              </span>
              <p>{project.techno}</p>
            </div>
          )}
          {project.features && (
            <p className="project-card-popup-block">
              <span className="project-card-popup-label">
                Fonctionnalités mises en avant :
              </span>{" "}
              {project.features}
            </p>
          )}
          <div className="project-card-popup-links">
            {project.githubFront && (
              <p className="project-card-popup-block">
                <span className="project-card-popup-label">Front-end :</span>{" "}
                {project.githubFront === "privé" ? (
                  <span>Repo privé</span>
                ) : (
                  <a
                    href={project.githubFront}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card-popup-link">
                    Voir le repo front-end sur GitHub
                  </a>
                )}
              </p>
            )}
            {project.githubBack && (
              <p className="project-card-popup-block">
                <span className="project-card-popup-label">Back-end :</span>{" "}
                {project.githubBack === "privé" ? (
                  <span>Repo privé</span>
                ) : (
                  <a
                    href={project.githubBack}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card-popup-link">
                    Voir le repo back-end sur GitHub
                  </a>
                )}
              </p>
            )}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardPopup;
