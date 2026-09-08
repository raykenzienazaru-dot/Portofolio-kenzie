import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { socials } from "../data/profile";

const icons = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedinIn,
  Instagram: FaInstagram,
};
export default function SocialLinks({ className = "" }) {
  return (
    <div className={`social-links ${className}`}>
      {socials.map(({ name, url }) => {
        const Icon = icons[name];
        return (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} profile`}
            title={name}
          >
            <Icon aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
}
