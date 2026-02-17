"use client";
import { useLanguage } from "../lib/LanguageContext";
import { projects } from "../lib/data";
import Image from "next/image";

interface ProjectsProps {
  onOpenProject: (projectId: string) => void;
}

export default function Projects({ onOpenProject }: ProjectsProps) {
  const { t } = useLanguage();

  return (
    <div className="container">
      <h2>{t("projects.title")}</h2>
      <div className="grid">
        {projects.map((project) => (
          <article
            key={project.id}
            className="card project-card"
            onClick={() => onOpenProject(project.id)}
          >
            <Image
              src={project.image}
              alt={t(`project.${project.id}.title` as any) as string}
              width={400}
              height={225}
              style={{ width: "100%", height: "auto" }}
            />
            <h3>{t(`project.${project.id}.title` as any)}</h3>
            <p>{t(`project.${project.id}.short` as any)}</p>
            <div className="tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
