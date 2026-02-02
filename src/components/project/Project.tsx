import "./Project.css";
import type { ProjectItem } from "../../lib/data/data";

interface ProjectProps {
  project: ProjectItem;
  projectsTab?: ProjectItem[];
}

const Project = ({ project }: ProjectProps) => {
  return (
    <>
      <div className="global-project-box">
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
              />
            </div>
          ) : (
            <a
              className="img-project-box"
              href={project.url}
              onClick={(e) => {
                if (project.url === "") e.preventDefault();
              }}>
              <img
                src={project.img}
                alt="image du projet"
                className="img-project"
              />
            </a>
          )}
          <div className="project-desciption-box">
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
                    <div> Repo privé</div>
                  ) : (
                    <a
                      href={project.githubFront}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-features-link">
                      Cliquez ici pour voir le repo !
                    </a>
                  )}
                </p>
              )}
              {project.githubBack && (
                <p className="project-features">
                  <span className="weigth">Back-end :</span>{" "}
                  {project.githubBack === "privé" ? (
                    <div> Repo privé</div>
                  ) : (
                    <a
                      href={project.githubBack}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-features-link">
                      {" "}
                      Cliquez ici pour voir le repo !
                    </a>
                  )}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
