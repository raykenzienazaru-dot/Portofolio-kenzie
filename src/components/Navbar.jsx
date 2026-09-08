import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "../data/profile";
import SocialLinks from "./SocialLinks";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const [active, setActive] = useState("home");
  const toggleRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -60% 0px" },
    );
    navigation.forEach((name) => {
      const el = document.getElementById(name.toLowerCase());
      if (el) observer.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    headerRef.current?.querySelector(".main-nav a")?.focus();
    const onKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onClick = (event) => {
      if (!headerRef.current?.contains(event.target)) setOpen(false);
    };
    const media = window.matchMedia("(min-width: 960px)");
    const onResize = () => {
      if (media.matches) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onClick);
    media.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onClick);
      media.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <header
      ref={headerRef}
      className={`site-header ${compact ? "compact" : ""}`}
    >
      <div className="container nav-inner">
        <a
          className="wordmark"
          href="#home"
          aria-label="RZN. — Back to home"
          onClick={() => setOpen(false)}
        >
          RZN<span>.</span>
        </a>
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={`main-nav ${open ? "is-open" : ""}`}
        >
          {navigation.map((name) => (
            <a
              href={`#${name.toLowerCase()}`}
              key={name}
              aria-current={
                active === name.toLowerCase() ? "location" : undefined
              }
              onClick={() => setOpen(false)}
            >
              {name}
            </a>
          ))}
        </nav>
        <SocialLinks className="nav-social" />
        <button
          ref={toggleRef}
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
