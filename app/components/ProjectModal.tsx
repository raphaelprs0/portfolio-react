"use client";
import { useLanguage } from "../lib/LanguageContext";
import { projects } from "../lib/data";
import Image from "next/image";

interface ProjectModalProps {
  projectId: string | null;
  onClose: () => void;
}

export default function ProjectModal({ projectId, onClose }: ProjectModalProps) {
  const { lang } = useLanguage();
  
  if (!projectId) return null;
  
  const project = projects.find((p) => p.id === projectId);
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content project-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <i className="ri-close-line"></i>
        </button>
        <div className="modal-image project-image">
          <Image
            src={project.image}
            alt={project.title}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="modal-body">
          <h3>{project.title}</h3>
          <p className="project-description">{project.description[lang]}</p>
          <div className="project-tech">
            {project.tech.map((tech: string, i: number) => (
              <span key={i} className="tech-tag">{tech}</span>
            ))}
          </div>
          <div className="project-links">
            {(project as any).github && (
              <a href={(project as any).github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <i className="ri-github-line"></i> GitHub
              </a>
            )}
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <i className="ri-external-link-line"></i> Live
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
