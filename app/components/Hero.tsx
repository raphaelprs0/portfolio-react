"use client";
import { useEffect, useState } from "react";
import { useLanguage } from "../lib/LanguageContext";
// 1. On importe le composant SplitText
import SplitText from "./SplitText";

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const { t } = useLanguage();
  const words = t("home.typewriter") as string[];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // 2. On définit la fonction de callback pour la fin de l'animation
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

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
      {/* 3. Intégration du SplitText à la place du h1 standard */}
      <SplitText
        text={t("home.title")} // Utilisation du texte de traduction
        className="text-2xl font-semibold text-center hero-title" // J'ai gardé vos classes et ajouté 'hero-title' au cas où vous auriez du CSS spécifique
        delay={50}
        duration={1.25}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        onLetterAnimationComplete={handleAnimationComplete}
        showCallback
      />

      <h2 className="typewriter">
        <span className="txt-type">{text}</span>
      </h2>
      <p className="hero-text">
        {t("home.description")} <strong>{t("home.highlight1")}</strong> {t("home.and")} <strong>{t("home.highlight2")}</strong>
      </p>
      <div className="hero-buttons">
        <button className="btn-primary" onClick={() => onNavigate("projects")}>
          {t("home.cta")}
        </button>
      </div>
    </div>
  );
}