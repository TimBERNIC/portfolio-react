import Project from "../../components/project/Project";
import "./Backend.css";

const Backend = ({ projectsTab }) => {
  return (
    <div className="backend container">
      <section className="backend-project-box">
        <h2>EN COURS DE CREATION...</h2>
        {projectsTab.map((project) => {
          if (project.type === "backend") {
            return <Project project={project} projectsTab={projectsTab} />;
          }
        })}
      </section>
    </div>
  );
};

export default Backend;
