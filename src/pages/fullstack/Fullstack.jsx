import Project from "../../components/project/Project";
import "./Fullstack.css";

const Fullstack = ({ projectsTab }) => {
  return (
    <>
      <div className="fullstack container">
        <h2>Projets Fullstack</h2>
        <p>Cliquez sur l'image pour accéder directement au projet</p>
        <section className="fullstack-project-box">
          {projectsTab.map((project, index) => {
            if (project.type === "fullstack") {
              return (
                <Project
                  key={index}
                  project={project}
                  projectsTab={projectsTab}
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
