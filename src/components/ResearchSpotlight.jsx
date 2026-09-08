import { ArrowUpRight, FileText } from "lucide-react";
import { unj } from "../data/research";
import Reveal from "./ui/Reveal";

export default function ResearchSpotlight() {
  return (
    <Reveal className="unj-spotlight">
      <div className="unj-visual">
        <span className="eyebrow">From the proposal / Interface study</span>
        <img
          src="/images/research/eduinsight-screen.webp"
          width="297"
          height="663"
          alt="Student dashboard mockup from the EduInsight AI competition proposal"
          loading="lazy"
        />
        <span className="unj-visual-caption">
          Original design mockup · Team NAVI
        </span>
      </div>
      <div className="unj-copy">
        <span className="eyebrow">UI/UX research / {unj.year}</span>
        <h3>
          LEARNING,
          <br />
          WITH THE
          <br />
          <span>STUDENT FIRST.</span>
        </h3>
        <p className="unj-name">{unj.title}</p>
        <p>
          A learning-platform concept bringing quizzes, AI-assisted study,
          classroom administration and teacher analytics into one experience.
        </p>
        <dl>
          <div>
            <dt>Competition</dt>
            <dd>
              {unj.event}
              <br />
              {unj.organizer}
            </dd>
          </div>
          <div>
            <dt>My contribution</dt>
            <dd>
              {unj.role}
              <br />
              <span>Team {unj.team}</span>
            </dd>
          </div>
        </dl>
        <div className="unj-actions">
          <a
            className="button-primary"
            href="/documents/eduinsight.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read proposal <FileText size={17} />
          </a>
          <a
            className="text-link"
            href={unj.prototype}
            target="_blank"
            rel="noopener noreferrer"
          >
            Figma prototype <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </Reveal>
  );
}
