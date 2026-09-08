import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects, collaboration } from "../data/projects";
const filters = ["ALL", "WEB", "IOT", "AI", "R&D"];
export default function Projects() {
  const [filter, setFilter] = useState("ALL");
  const visible = projects.filter(
    (project) => filter === "ALL" || project.filters.includes(filter),
  );
  const showCollaboration = filter === "ALL" || filter === "R&D";
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-title-row">
          <SectionHeading number="03" label="From idea to working project">
            SELECTED
            <br />
            PROJECTS<span className="heading-dot">.</span>
          </SectionHeading>
          <p>
            A selection of systems, experiments
            <br />
            and products I've worked on.
          </p>
        </div>
        <div className="project-toolbar">
          <div
            className="project-filters"
            role="group"
            aria-label="Filter projects"
          >
            {filters.map((item) => (
              <button
                key={item}
                aria-pressed={filter === item}
                onClick={() => setFilter(item)}
              >
                {item === "IOT" ? "IoT" : item}
                {filter === item && (
                  <span className="filter-dot" aria-hidden="true" />
                )}
              </button>
            ))}
          </div>
          <span
            className="eyebrow project-count"
            role="status"
            aria-live="polite"
          >
            {String(visible.length).padStart(2, "0")} projects
            {showCollaboration ? " + collaboration" : ""}
          </span>
        </div>
        <div className="projects-grid">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {showCollaboration && (
          <article className="collaboration-feature" data-project="waru">
            <div>
              <span className="eyebrow">
                Alongside the team / Collaboration
              </span>
              <h3>
                {collaboration.title}
                <span> — {collaboration.subtitle}</span>
              </h3>
            </div>
            <div>
              <p className="collaboration-role">Role: {collaboration.role}</p>
              <p>{collaboration.description}</p>
              <a
                className="text-link"
                href={collaboration.repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore repository <ArrowUpRight size={18} />
              </a>
            </div>
          </article>
        )}
        <a
          className="all-repositories text-link"
          href="https://github.com/raykenzienazaru-dot"
          target="_blank"
          rel="noopener noreferrer"
        >
          More experiments on GitHub <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}
