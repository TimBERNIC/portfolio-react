import Project from "../../components/project/Project";
import "../frontend/Frontend.css";
const Frontend = ({ projectsTab }) => {
  return (
    <div className="frontend container">
      <h2>Frontend</h2>
      <p>Cliquez sur l'image pour accéder directement au projet</p>
      <section className="frontend-project-box">
        {projectsTab.map((project) => {
          if (project.type === "frontend") {
            return <Project project={project} projectsTab={projectsTab} />;
          }
        })}
      </section>
    </div>
  );
};

export default Frontend;
