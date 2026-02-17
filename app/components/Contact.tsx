"use client";
import { useState } from "react";
import { useLanguage } from "../lib/LanguageContext";
import { socials } from "../lib/data";

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    // Simule l'envoi (à remplacer par ton API)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="container">
      <h2>{t("contact.title")}</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder={t("contact.name") as string}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder={t("contact.email") as string}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            rows={5}
            placeholder={t("contact.message") as string}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="btn-primary full-width" disabled={status === "sending"}>
          {status === "sending" ? "..." : t("contact.send")}
        </button>
      </form>

      <div className="social-grid">
        {socials.map((social) => (
          <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="social-card">
            <div className="social-icon">
              <i className={social.icon}></i>
            </div>
            <div className="social-info">
              <h4>{social.name}</h4>
            </div>
          </a>
        ))}
      </div>

      <footer className="credits">
        <p>© 2026 all rights reserved. Made by Raphaël with passion</p>
      </footer>
    </div>
  );
}
