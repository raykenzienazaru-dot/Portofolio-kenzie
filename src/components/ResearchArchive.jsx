import { useState } from "react";
import {
  Search,
  ArrowUpRight,
  FileText,
  Download,
  Database,
  Cpu,
  Code2,
  Plus,
  X,
} from "lucide-react";
import { documents, researchAssets } from "../data/research";
import FilterBar from "./ui/FilterBar";
import SectionHeading from "./SectionHeading";
import DocumentPreview from "./DocumentPreview";
const resources = [...documents, ...researchAssets];
const kinds = ["ALL", "KTI", "PROPOSAL", "DATASET", "MODEL", "FIRMWARE"];
const labels = {
  ALL: "All",
  KTI: "KTI",
  PROPOSAL: "Proposals",
  DATASET: "Datasets",
  MODEL: "Models",
  FIRMWARE: "Firmware",
};
const icons = { DATASET: Database, MODEL: Cpu, FIRMWARE: Code2 };
export default function ResearchArchive() {
  const [kind, setKind] = useState("ALL");
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [preview, setPreview] = useState(null);
  const filtered = resources.filter(
    (item) =>
      (kind === "ALL" || item.kind === kind) &&
      `${item.title} ${item.description} ${item.role || ""} ${(item.tags || []).join(" ")}`
        .toLowerCase()
        .includes(query.toLowerCase().trim()),
  );
  const visible = expanded ? filtered : filtered.slice(0, 6);
  const options = kinds.map((value) => ({
    value,
    label: labels[value],
    count: resources.filter((item) => value === "ALL" || item.kind === value)
      .length,
  }));
  return (
    <section
      id="research"
      className="section research-section"
      aria-labelledby="research-title"
    >
      <div className="container">
        <div className="section-title-row">
          <SectionHeading
            id="research-title"
            number="03 / B"
            label="Behind the finished work"
          >
            THE RESEARCH
            <br />
            ARCHIVE<span className="heading-dot">.</span>
          </SectionHeading>
          <p>
            Papers, proposals, datasets and the
            <br />
            experiments that connect them.
          </p>
        </div>
        <div className="archive-toolbar">
          <FilterBar
            options={options}
            value={kind}
            onChange={(value) => {
              setKind(value);
              setExpanded(false);
            }}
            label="Filter research archive"
          />
          <label className="archive-search">
            <Search size={17} aria-hidden="true" />
            <span className="sr-only">Search research archive</span>
            <input
              type="search"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setExpanded(false);
              }}
              placeholder="Find a paper, model, sensor…"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                type="button"
                aria-label="Clear research search"
              >
                <X size={15} />
              </button>
            )}
          </label>
        </div>
        <div className="archive-caption">
          <span role="status" aria-live="polite">
            {filtered.length} {filtered.length === 1 ? "resource" : "resources"}
            {query && ` matching “${query}”`}
          </span>
          <span>Original documents & source files</span>
        </div>
        <div className="research-grid">
          {visible.map((item) => {
            const Icon = icons[item.kind] || FileText;
            return (
              <article
                className={`research-card ${item.file ? "research-paper" : "research-artifact"}`}
                key={item.id}
                data-resource={item.id}
              >
                {item.file ? (
                  <button
                    className="paper-thumbnail"
                    onClick={() => setPreview(item)}
                    aria-label={`Preview ${item.title}`}
                  >
                    <img
                      src={item.thumbnail}
                      alt={`${item.title} original document cover`}
                      width="340"
                      height="480"
                      loading="lazy"
                    />
                    <span className="paper-open">
                      <ArrowUpRight size={20} />
                    </span>
                  </button>
                ) : (
                  <div className="artifact-mark">
                    <Icon size={33} strokeWidth={1.2} aria-hidden="true" />
                    <span className="eyebrow">{item.format}</span>
                  </div>
                )}
                <div className="research-card-copy">
                  <div className="eyebrow resource-type">
                    <span>
                      {item.kind === "KTI"
                        ? "Research / KTI"
                        : labels[item.kind]}
                    </span>
                    <span>{item.year || item.format}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  {item.role && <p className="resource-role">{item.role}</p>}
                  {item.tags && (
                    <ul className="tech-tags">
                      {item.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  )}
                  <div className="resource-actions">
                    {item.file ? (
                      <>
                        <button onClick={() => setPreview(item)}>
                          Read PDF <ArrowUpRight size={15} />
                        </button>
                        <a
                          href={item.file}
                          download
                          aria-label={`Download ${item.title} PDF, ${item.pages} pp · ${(item.bytes / 1000000).toFixed(1)} MB`}
                        >
                          <Download size={16} />
                          <span>
                            {item.pages} pp ·{" "}
                            {(item.bytes / 1000000).toFixed(1)} MB
                          </span>
                        </a>
                      </>
                    ) : (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Explore source <ArrowUpRight size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        {filtered.length === 0 && (
          <div className="archive-empty">
            <Search size={26} />
            <h3>No matching resources</h3>
            <p>Try a project name or a term such as sensor, IoT or proposal.</p>
            <button
              className="text-link"
              onClick={() => {
                setQuery("");
                setKind("ALL");
              }}
            >
              Reset search <ArrowUpRight size={16} />
            </button>
          </div>
        )}
        {!expanded && filtered.length > visible.length && (
          <button
            className="collection-expand"
            onClick={() => setExpanded(true)}
          >
            Explore all {filtered.length} resources <Plus size={18} />
          </button>
        )}
        <p className="archive-source-note">
          Sensor research includes synthetic datasets and experimental models.
          Each entry distinguishes datasets, model artifacts and templates.
        </p>
      </div>
      {preview && (
        <DocumentPreview document={preview} onClose={() => setPreview(null)} />
      )}
    </section>
  );
}
