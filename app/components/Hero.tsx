"use client";
import { useEffect, useState } from "react";
import { useLanguage } from "../lib/LanguageContext";

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const { t } = useLanguage();
  const words = t("home.typewriter") as string[];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      setText((current) =>
        isDeleting
          ? currentWord.substring(0, current.length - 1)
          : currentWord.substring(0, current.length + 1)
      );

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 2500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => prev + 1);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words]);

  return (
    <div className="container hero-container">
      <h1>{t("home.title")}</h1>
      <h2 className="typewriter">
        <span className="txt-type">{text}</span>
      </h2>
      <p className="hero-text">
        {t("home.description")} <strong>{t("home.highlight1")}</strong> and{" "}
        <strong>{t("home.highlight2")}</strong>
      </p>
      <div className="hero-buttons">
        <button className="btn-primary" onClick={() => onNavigate("projects")}>
          {t("home.cta")}
        </button>
      </div>
    </div>
  );
}