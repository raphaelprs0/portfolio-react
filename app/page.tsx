"use client";
import { useState } from "react";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Music from "./components/Music";
import Contact from "./components/Contact";
import PassionModal from "./components/PassionModal";
import ProjectModal from "./components/ProjectModal";

type Section = "home" | "about" | "projects" | "music" | "contact";

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [openPassion, setOpenPassion] = useState<string | null>(null);
  const [openProject, setOpenProject] = useState<string | null>(null);

  const handleNavigate = (section: string) => {
    setActiveSection(section as Section);
  };

  return (
    <>
      <Background />
      
      <main className="main-content">
        <section id="home" className={`section ${activeSection === "home" ? "active" : ""}`}>
          <Hero onNavigate={handleNavigate} />
        </section>

        <section id="about" className={`section ${activeSection === "about" ? "active" : ""}`}>
          <About onOpenPassion={setOpenPassion} />
        </section>

        <section id="projects" className={`section ${activeSection === "projects" ? "active" : ""}`}>
          <Projects onOpenProject={setOpenProject} />
        </section>

        <section id="music" className={`section ${activeSection === "music" ? "active" : ""}`}>
          <Music />
        </section>

        <section id="contact" className={`section ${activeSection === "contact" ? "active" : ""}`}>
          <Contact />
        </section>
      </main>

      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      <PassionModal passionId={openPassion} onClose={() => setOpenPassion(null)} />
      <ProjectModal projectId={openProject} onClose={() => setOpenProject(null)} />
    </>
  );
}