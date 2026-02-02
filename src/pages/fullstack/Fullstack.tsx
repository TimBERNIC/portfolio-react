import { useState, useMemo } from "react";
import ProjectCard from "../../components/project/ProjectCard.tsx";
import "./Fullstack.css";
import type { ProjectItem } from "../../lib/data/data";
import { useVisibleOnMount } from "../../hooks/useVisibleOnMount";

const FILTER_OPTIONS = ["Tous", "React", "Node", "Express", "MongoDB", "React Native"] as const;
const INITIAL_COUNT = 6;

interface FullstackProps {
  projectsTab: ProjectItem[];
}

const Fullstack = ({ projectsTab }: FullstackProps) => {
  const isVisible = useVisibleOnMount(500);
  const [filterTech, setFilterTech] = useState<string>("Tous");
  const [showAll, setShowAll] = useState(false);

  const fullstackProjects = useMemo(
    () => projectsTab.filter((p) => p.type === "fullstack"),
    [projectsTab]
  );

  const filteredProjects = useMemo(() => {
    if (filterTech === "Tous") return fullstackProjects;
    const search = filterTech.toLowerCase().replace(/\s/g, "");
    return fullstackProjects.filter((p) => {
      const techno = (p.techno ?? "").toLowerCase().replace(/\s/g, "");
      return techno.includes(search);
    });
  }, [fullstackProjects, filterTech]);

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
        isVisible ? "fullstack container visible" : "fullstack container"
      }>
      <h2>Projets Fullstack</h2>
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

      <section className="fullstack-project-box">
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

export default Fullstack;
