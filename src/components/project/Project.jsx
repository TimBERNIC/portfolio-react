import "./Project.css";
import { useState } from "react";

const Project = ({ project }) => {
  return (
    <>
      <div className="global-project-box">
        <h3 className="project-title-box">{project.title}</h3>
        <p className="project-subtitle-box">{project.subtitle}</p>

        <div className="project-details">
          <a className="img-project-box" href={project.url}>
            <img
              src={project.img}
              alt="image du projet"
              className="img-project"
            />
          </a>
          <div className="project-desciption-box">
            <p>
              <span className="weigth">Technologies utilisées </span>:{" "}
              {project.techno}
            </p>
            <p className="project-features">
              <span className="weigth">Fonctionnalités mises en avant :</span>{" "}
              {project.features}
            </p>
            <div className="project-features-box">
              {project.githubFront && (
                <p className="project-features">
                  <span className="weigth">Github Front :</span>{" "}
                  {project.githubFront === "privé" ? (
                    <div> Repo privé</div>
                  ) : (
                    <a href={project.githubFront}>Lien</a>
                  )}
                </p>
              )}
              {project.githubBack && (
                <p className="project-features">
                  <span className="weigth">Github Back :</span>{" "}
                  {project.githubBack === "privé" ? (
                    <div> Repo privé</div>
                  ) : (
                    <a href={project.githubBack}>Lien</a>
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
