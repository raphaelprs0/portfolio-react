"use client";
import { useLanguage } from "../lib/LanguageContext";
import { skills, passions, languages } from "../lib/data";

interface AboutProps {
  onOpenPassion: (passionId: string) => void;
}

export default function About({ onOpenPassion }: AboutProps) {
  const { t } = useLanguage();

  return (
    <div className="container">
      <h2>{t("about.title")}</h2>
      <div className="bento-grid">
        {/* Journey */}
        <div className="bento-card bio-card">
          <h3>{t("about.journey.title")}</h3>
          <p>{t("about.journey.description")}</p>
          <div className="timeline">
            <div className="timeline-item">
              <span className="year">2024 - 2027</span>
              <div className="details">
                <strong>{t("about.journey.degree")}</strong>
                <span>{t("about.journey.school")}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="bento-card tech-card">
          <h3>{t("about.skills.title")}</h3>
          <div className="skill-tags">
            {skills.map((skill) => (
              <span key={skill} className="tech-tag">{skill}</span>
            ))}
          </div>
        </div>

        {/* Passions */}
        <div className="bento-card interests-card">
          <h3>{t("about.passions.title")}</h3>
          <div className="passions-grid">
            {passions.map((passion) => (
              <div
                key={passion.id}
                className="passion-item"
                onClick={() => onOpenPassion(passion.id)}
              >
                <span className="passion-icon">{passion.icon}</span>
                <span className="passion-name">
                  {t(`passion.${passion.id}.name` as any)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="bento-card languages-card">
          <h3>{t("about.languages.title")}</h3>
          <div className="languages-list">
            {languages.map((lang) => (
              <div key={lang.id} className="language-item">
                <span className="lang-name">
                  {t(`about.languages.${lang.id}` as any)}
                </span>
                <span className="lang-level">
                  {t(`about.languages.${lang.level}` as any)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CV Download */}
        <div className="bento-card download-card">
          <p>{t("about.cv.label")}</p>
          <a href="/cv-raphael.pdf" target="_blank" className="btn-small">
            <span>{t("about.cv.button")}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
