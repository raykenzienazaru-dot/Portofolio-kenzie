import { ArrowDown, ArrowUpRight, ArrowRight } from "lucide-react";
import { profile } from "../data/profile";
import SocialLinks from "./SocialLinks";

export default function Hero() {
  return (
    <section id="home" className="hero container" aria-labelledby="hero-title">
      <div className="hero-topline eyebrow">
        <span>Personal portfolio / 2026</span>
        <span>
          Jakarta, Indonesia{" "}
          <span className="small-cross" aria-hidden="true">
            +
          </span>
        </span>
      </div>
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="hero-intro eyebrow">
            <span className="status-dot" /> Student developer & researcher
          </p>
          <h1 id="hero-title">
            RAYKENZIE
            <br />
            <span>NAZARU</span>
            <span className="sr-only"> Fathurrahmansyah</span>
            <span className="hero-period" aria-hidden="true">
              .
            </span>
          </h1>
          <p className="hero-role">
            Developer <span>·</span> IoT <span>·</span> AI <span>·</span>{" "}
            Research & Development
          </p>
          <p className="hero-description">
            I'm Raykenzie, a student developer and researcher exploring
            software, connected devices and artificial intelligence through
            hands-on projects.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="#projects">
              View Projects <ArrowUpRight size={19} />
            </a>
            <a className="text-link" href="#about">
              About Me <ArrowRight size={18} />
            </a>
          </div>
          <a className="hero-archive-link" href="#research">
            Explore KTI, proposals & datasets <ArrowUpRight size={15} />
          </a>
        </div>
        <figure className="hero-portrait">
          <div className="portrait-frame">
            <img
              src={profile.portrait}
              width="800"
              height="1067"
              alt="Raykenzie Nazaru Fathurrahmansyah"
              fetchPriority="high"
            />
            <span className="portrait-corner" aria-hidden="true">
              RZN / 26
            </span>
          </div>
          <figcaption>
            <span>Raykenzie Nazaru Fathurrahmansyah</span>
            <span>Based in Jakarta, Indonesia</span>
          </figcaption>
        </figure>
      </div>
      <div className="hero-bottom">
        <a href="#about" className="scroll-link">
          <ArrowDown size={17} />
          <span className="eyebrow">A little further down</span>
        </a>
        <SocialLinks />
        <span className="eyebrow hero-bottom-note">
          Curiosity. Research. Working prototypes.
        </span>
      </div>
    </section>
  );
}
