import { ArrowUp } from "lucide-react";
import SocialLinks from "./SocialLinks";
import { profile } from "../data/profile";
export default function Footer() {
  return (
    <footer className="site-footer dark-section">
      <div className="container footer-inner">
        <a className="wordmark" href="#home" aria-label="RZN. — Home">
          RZN.
        </a>
        <p>
          {profile.name}
          <span>Portfolio 2026</span>
        </p>
        <SocialLinks />
        <a className="back-top" href="#home">
          Back to top <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  );
}
