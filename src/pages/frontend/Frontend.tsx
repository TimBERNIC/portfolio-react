import { useState, useMemo } from "react";
import ProjectCard from "../../components/project/ProjectCard.tsx";
import "./Frontend.css";
import type { ProjectItem } from "../../lib/data/data";
import { useVisibleOnMount } from "../../hooks/useVisibleOnMount";

const FILTER_OPTIONS = ["Tous", "React", "Svelte", "JavaScript", "TypeScript", "Tailwind"] as const;
const INITIAL_COUNT = 6;

interface FrontendProps {
  projectsTab: ProjectItem[];
}

const Frontend = ({ projectsTab }: FrontendProps) => {
  const isVisible = useVisibleOnMount(500);
  const [filterTech, setFilterTech] = useState<string>("Tous");
  const [showAll, setShowAll] = useState(false);

  const frontendProjects = useMemo(
    () => projectsTab.filter((p) => p.type === "frontend"),
    [projectsTab]
  );

  const filteredProjects = useMemo(() => {
    if (filterTech === "Tous") return frontendProjects;
    const search = filterTech.toLowerCase().replace(/\s/g, "");
    return frontendProjects.filter((p) => {
      const techno = (p.techno ?? "").toLowerCase().replace(/\s/g, "");
      return techno.includes(search);
    });
  }, [frontendProjects, filterTech]);

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, INITIAL_COUNT);
  const hasMore = filteredProjects.length > INITIAL_COUNT;

  const handleFilterChange = (option: string) => {
    setFilterTech(option);
    setShowAll(false);
  };

  return (
    <div
      className={
        isVisible ? "frontend container visible" : "frontend container"
      }>
      <h2>Frontend</h2>
      <p>Cliquez sur une carte pour voir les détails et accéder au projet</p>

      <div className="project-filters" role="tablist" aria-label="Filtrer par technologie">
        {FILTER_OPTIONS.map((option) => (
          <button
            key={option}
            type="button"
            role="tab"
            aria-selected={filterTech === option}
            className={`filter-btn ${filterTech === option ? "filter-btn-active" : ""}`}
            onClick={() => handleFilterChange(option)}>
            {option}
          </button>
        ))}
      </div>

      <section className="frontend-project-box">
        {displayedProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </section>

      {hasMore && (
        <div className="voir-plus-wrap">
          <button
            type="button"
            className="voir-plus-btn"
            onClick={() => setShowAll(!showAll)}
            aria-expanded={showAll}>
            {showAll ? "Voir moins" : "Voir plus"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Frontend;
