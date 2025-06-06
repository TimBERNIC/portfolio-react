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
            <img src={project.img} alt="image du projet" />
          </a>
          <div className="project-desciption-box">
            <p>
              {" "}
              <span className="weigth">Technologies utilisées </span>:{" "}
              {project.techno}
            </p>
            <p>{project.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
