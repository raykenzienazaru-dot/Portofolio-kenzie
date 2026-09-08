import { useState } from "react";
import { ArrowUpRight, Plus, Library, FlaskConical } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import ResearchSpotlight from "./ResearchSpotlight";
import FilterBar from "./ui/FilterBar";
import Reveal from "./ui/Reveal";
import { projects, collaboration } from "../data/projects";
const filters = ["ALL", "WEB", "IOT", "AI", "R&D"];

export default function Projects() {
  const [filter, setFilter] = useState("ALL");
  const [expanded, setExpanded] = useState(false);
  const filtered = projects.filter(
    (project) => filter === "ALL" || project.filters.includes(filter),
  );
  const visible = expanded ? filtered : filtered.slice(0, 6);
  const showCollaboration = filter === "ALL" || filter === "R&D";
  const options = filters.map((value) => ({
    value,
    label: value === "IOT" ? "IoT" : value,
    count: projects.filter(
      (project) => value === "ALL" || project.filters.includes(value),
    ).length,
  }));
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
            Software, connected devices and research.
            <br />A closer look at the work behind them.
          </p>
        </div>
        <ResearchSpotlight />
        <aside
          className="rnd-throughline"
          aria-label="Research and development approach"
        >
          <FlaskConical size={25} strokeWidth={1.35} aria-hidden="true" />
          <div>
            <span className="eyebrow">R&D / Across the GitHub archive</span>
            <p>
              The projects shown here grow through research and development:
              studying the problem, prototyping an approach, testing the system
              and refining the result.
            </p>
          </div>
        </aside>
        <div className="collection-heading">
          <h3 className="eyebrow">Explore the project index</h3>
          <a href="#research">
            <Library size={15} /> Research archive <ArrowUpRight size={15} />
          </a>
        </div>
        <div className="project-toolbar">
          <FilterBar
            options={options}
            value={filter}
            onChange={(value) => {
              setFilter(value);
              setExpanded(false);
            }}
            label="Filter projects"
          />
          <span
            className="eyebrow project-count"
            role="status"
            aria-live="polite"
          >
            {String(filtered.length).padStart(2, "0")} projects
            {showCollaboration ? " + collaboration" : ""}
          </span>
        </div>
        <div className="projects-grid">
          {visible.map((project) => (
            <Reveal key={project.id} className="project-reveal">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
        {!expanded && filtered.length > visible.length && (
          <button
            className="collection-expand"
            onClick={() => setExpanded(true)}
          >
            View all {filtered.length} projects <Plus size={18} />
          </button>
        )}
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
