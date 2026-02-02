import { useState } from "react";
import type { ProjectItem } from "../../lib/data/data";
import ProjectCardPopup from "./ProjectCardPopup";
import "./ProjectCard.css";

interface ProjectCardProps {
  project: ProjectItem;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <article
        className="project-card"
        onClick={() => setIsPopupOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsPopupOpen(true);
          }
        }}
        role="button"
        tabIndex={0}
        aria-label={`Voir les détails du projet ${project.title}`}>
        <div className="project-card-img-wrap">
          {project.title === "BnBair" ? (
            <video
              src={project.img}
              autoPlay
              loop
              muted
              playsInline
              className="project-card-img"
              aria-hidden
            />
          ) : (
            <img
              src={project.img}
              alt=""
              className="project-card-img"
              loading="lazy"
            />
          )}
        </div>
        <h3 className="project-card-title">{project.title}</h3>
        {project.techno && (
          <p className="project-card-techno">{project.techno}</p>
        )}
      </article>

      {isPopupOpen && (
        <ProjectCardPopup
          project={project}
          onClose={() => setIsPopupOpen(false)}
        />
      )}
    </>
  );
};

export default ProjectCard;
