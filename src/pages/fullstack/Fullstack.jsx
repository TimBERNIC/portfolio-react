import { useState, useEffect } from "react";
import Project from "../../components/project/Project";
import "./Fullstack.css";
const Fullstack = ({ projectsTab }) => {
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
    <>
      <div
        className={
          isVisible ? "fullstack container visible" : "fullstack container"
        }>
        <h2>Projets Fullstack</h2>
        <p>Cliquez sur l'image pour accéder directement au projet</p>
        <section className="fullstack-project-box">
          {projectsTab.map((project, index) => {
            if (project.type === "fullstack") {
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
    </>
  );
};

export default Fullstack;
