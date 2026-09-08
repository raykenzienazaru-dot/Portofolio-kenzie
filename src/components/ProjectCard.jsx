import { useState } from "react";
import { ArrowUpRight, Code2 } from "lucide-react";
export default function ProjectCard({ project }) {
  const [imageFailed, setImageFailed] = useState(false);
  return (
    <article
      className={`project-card ${project.featured ? "featured-project" : ""}`}
      data-project={project.id}
    >
      <a
        className={`project-media media-${project.id}`}
        href={project.demo || project.repo}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={
          project.image && !imageFailed
            ? `Explore ${project.title}${project.demo ? " website" : " repository"}`
            : undefined
        }
      >
        {project.image && !imageFailed ? (
          <img
            src={project.image}
            width="1200"
            height="833"
            alt={project.imageAlt}
            loading="lazy"
            decoding="async"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="repository-preview">
            <div className="preview-toolbar">
              <span />
              <span />
              <span />
              <span className="preview-kind">
                {project.previewLabel || "REPOSITORY OVERVIEW"}
              </span>
            </div>
            <div className="preview-content">
              <Code2 size={30} strokeWidth={1} />
              <span className="preview-title">{project.title}</span>
              <span className="preview-category">{project.category}</span>
              <span className="preview-repo">
                raykenzienazaru-dot / {project.repo.split("/").at(-1)}
              </span>
            </div>
            <span className="preview-caption">
              Repository preview · Not an application screenshot
            </span>
          </div>
        )}
        <span className="project-open" aria-hidden="true">
          <ArrowUpRight size={22} />
        </span>
      </a>
      {project.imageLabel && (
        <p className="image-source-label">{project.imageLabel}</p>
      )}
      <div className="project-meta eyebrow">
        <span>
          {project.number} / {project.category}
        </span>
        {project.featured && <span>Featured</span>}
      </div>
      <h3>{project.title}</h3>
      <p className="project-description">{project.description}</p>
      {project.role && (
        <p className="project-role">
          <span>Role / </span>
          {project.role}
        </p>
      )}
      {project.tech.length > 0 && (
        <ul className="tech-tags" aria-label={`${project.title} technologies`}>
          {project.tech.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      )}
      <div className="project-links">
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} on GitHub`}
        >
          GitHub <ArrowUpRight size={16} />
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} live demo`}
          >
            Live Demo <ArrowUpRight size={16} />
          </a>
        )}
      </div>
    </article>
  );
}
