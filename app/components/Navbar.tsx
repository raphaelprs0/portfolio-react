"use client";
import { useRef, useEffect, useState, useCallback } from "react";
import { useLanguage } from "../lib/LanguageContext";
import type { TranslationKey } from "../lib/translations";

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const sections = ["home", "about", "projects", "music", "contact"] as const;

const navKeys: Record<string, TranslationKey> = {
  home: "nav.home",
  about: "nav.about",
  projects: "nav.projects",
  music: "nav.music",
  contact: "nav.contact",
};

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const { lang, setLang, t } = useLanguage();
  const pillRef = useRef<HTMLDivElement>(null);
  const [gliderStyle, setGliderStyle] = useState({ width: 0, x: 0 });

  const moveGlider = useCallback((target: HTMLElement | null) => {
    if (!target || !pillRef.current) return;
    setGliderStyle({
      width: target.offsetWidth,
      x: target.offsetLeft - 6,
    });
  }, []);

  useEffect(() => {
    const activeItem = pillRef.current?.querySelector(`[data-target="${activeSection}"]`) as HTMLElement;
    const timer = setTimeout(() => moveGlider(activeItem), 50);
    return () => clearTimeout(timer);
  }, [activeSection, moveGlider]);

  useEffect(() => {
    const handleResize = () => {
      const activeItem = pillRef.current?.querySelector(`[data-target="${activeSection}"]`) as HTMLElement;
      moveGlider(activeItem);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeSection, moveGlider]);

  return (
    <>
      <button className="lang-toggle" onClick={() => setLang(lang === "en" ? "fr" : "en")}>
        {lang === "en" ? "FR" : "EN"}
      </button>

      <nav className="bottom-nav">
        <div className="pill-nav" ref={pillRef}>
          <div
            className="nav-glider"
            style={{
              width: gliderStyle.width,
              transform: `translateX(${gliderStyle.x}px)`,
              opacity: gliderStyle.width > 0 ? 1 : 0,
            }}
          />
          {sections.map((section) => (
            <a
              key={section}
              className={`nav-item ${activeSection === section ? "active" : ""}`}
              data-target={section}
              onClick={() => onNavigate(section)}
            >
              {t(navKeys[section])}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}