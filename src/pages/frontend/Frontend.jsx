import Project from "../../components/project/Project";
import { useState, useEffect } from "react";
import "./Frontend.css";
const Frontend = ({ projectsTab }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const transition = async () => {
      setTimeout(() => {
        setIsVisible(true);
      }, 500);
    };

    transition();
  });
  return (
    <div
      className={
        isVisible ? "frontend container visible" : "frontend container"
      }>
      <h2>Frontend</h2>
      <p>Cliquez sur l'image pour accéder directement au projet</p>
      <section className="frontend-project-box">
        {projectsTab.map((project, index) => {
          if (project.type === "frontend") {
            return (
              <Project
                project={project}
                projectsTab={projectsTab}
                key={index}
              />
            );
          }
        })}
      </section>
    </div>
  );
};

export default Frontend;
