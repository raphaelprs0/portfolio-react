"use client";
import { useLanguage } from "../lib/LanguageContext";
import { passions } from "../lib/data";
import Image from "next/image";

interface PassionModalProps {
  passionId: string | null;
  onClose: () => void;
}

export default function PassionModal({ passionId, onClose }: PassionModalProps) {
  const { lang } = useLanguage();
  
  if (!passionId) return null;
  
  const passion = passions.find((p) => p.id === passionId);
  if (!passion) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <i className="ri-close-line"></i>
        </button>
        <div className="modal-image">
          <Image
            src={passion.image}
            alt={passion.title[lang]}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="modal-body">
          <h3>{passion.title[lang]}</h3>
          <p>{passion.description[lang]}</p>
        </div>
      </div>
    </div>
  );
}
