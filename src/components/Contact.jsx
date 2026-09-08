import { ArrowUpRight } from "lucide-react";
import { profile } from "../data/profile";
import SocialLinks from "./SocialLinks";
export default function Contact() {
  return (
    <section id="contact" className="section dark-section contact-section">
      <div className="container">
        <div className="eyebrow section-index">
          <span>05</span>
          <span>Have something in mind?</span>
        </div>
        <a href={`mailto:${profile.email}`} className="contact-title">
          <h2>
            LET'S
            <br />
            CONNECT<span>.</span>
          </h2>
          <ArrowUpRight aria-hidden="true" strokeWidth={0.8} />
        </a>
        <div className="contact-bottom">
          <p>
            For a project, a research idea,
            <br />
            or a conversation about technology.
          </p>
          <div>
            <span className="eyebrow">Email</span>
            <a className="contact-email" href={`mailto:${profile.email}`}>
              {profile.email} <ArrowUpRight size={16} />
            </a>
          </div>
          <div>
            <span className="eyebrow">Location</span>
            <p>{profile.location}</p>
          </div>
          <div>
            <span className="eyebrow">Elsewhere</span>
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
