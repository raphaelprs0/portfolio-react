export const skills = [
  "Python", "Swift", "Java", "SQL", "JS/HTML", 
  "Cisco Packet Tracer", "AWS", "VMware", "UTM", 
  "Linux", "Git/GitHub", "Xcode", "Figma"
];

export const passions = [
  { 
    id: "cars", 
    icon: "🏎️", 
    image: "/images/Passions/Porsche.jpg",
    title: { en: "Cars / Motorsports", fr: "Voitures / Sport automobile" },
    description: { 
      en: "Passionate about motorsports and cars. I follow Formula 1, Endurance racing (24h of Le Mans), and Rally. My favourite car brand has been Ferrari since I was little.",
      fr: "Passionné  de voitures et de sport automobile. Je suis la F1, l'Endurance (24h du Mans) et le Rallye. Ma marque de voiture préférée est Ferrari depuis petit."
    }
  },
  { 
    id: "music", 
    icon: "🎹", 
    image: "/images/Passions/Logic-Pro.webp",
    title: { en: "Music Production", fr: "Production Musicale" },
    description: { 
      en: "Creating Productions on Logic Pro allows me to work on my creative side. I like to experiment with all styles, from hip-hop to house music.",
      fr: "Créer des Productions sur Logic Pro me permet de travailler mon coté créatif. J'aime expérimenter tous les styles, du hip-hop à la house."
    }
  },
  { 
    id: "sports", 
    icon: "🥊", 
    image: "/images/Passions/Boxe.webp",
    title: { en: "Sports", fr: "Sports" },
    description: { 
      en: "Boxing keeps me disciplined and focused, while the gym helps me build strength. Both teach me perseverance and discipline.",
      fr: "La boxe me garde discipliné et concentré, la salle m'aide à développer ma force. Les deux m'enseignent la persévérance."
    }
  },
  { 
    id: "travel", 
    icon: "✈️", 
    image: "/images/Passions/Travel.webp",
    title: { en: "Travel", fr: "Voyages" },
    description: { 
      en: "Exploring new cultures across the world. From Lisbon to Punta Cana, traveling opens my mind and inspires creativity.",
      fr: "Explorer de nouvelles cultures. De Lisbonne à Punta Cana, voyager ouvre mon esprit et inspire ma créativité."
    }
  },
  { 
    id: "watches", 
    icon: "⌚", 
    image: "/images/Passions/Rolex.webp",
    title: { en: "Watches", fr: "Horlogerie" },
    description: { 
      en: "Fascinated by horology. From Rolex to Jaeger-Lecoultre. I'm working on creating my own custom timepieces.",
      fr: "Fasciné par l'horlogerie. De Rolex à Jaeger-Lecoultre. Je travaille également sur la création de mes propres montres."
    }
  },
];

export const projects = [
  {
    id: "grass",
    title: "Laying Grass Game",
    image: "/images/Project/Laying-grass.webp",
    description: {
      en: "High-performance game engine built in C++ featuring an optimized inventory system, real-time resource tracking, and smooth gameplay mechanics.",
      fr: "Jeu haute performance créé en C++ avec système d'inventaire optimisé, suivi des ressources en temps réel et mécanique de jeu fluide."
    },
    tech: ["C++"],
    tags: ["C++"],
  },
  {
    id: "seo",
    title: "SEO Website",
    image: "/images/Project/seo-website.webp",
    description: {
      en: "A comprehensive SEO-optimized website with keyword analysis tools, site audit capabilities, and Google referencing integration.",
      fr: "Site web optimisé SEO avec outils d'analyse de mots-clés, audit de site et intégration du référencement Google."
    },
    tech: ["HTML", "CSS", "SEO"],
    tags: ["HTML", "CSS", "SEO"],
    link: "https://devparisfreelance.fr",
  },
  {
    id: "imdb",
    title: "Internet Movies DataBase",
    image: "/images/Project/imdb.webp",
    description: {
      en: "A movie discovery platform built with PHP and SQL, featuring real-time analytics and advanced filtering options.",
      fr: "Plateforme de découverte de films en PHP/SQL avec analyses en temps réel et options de filtrage avancées."
    },
    tech: ["PHP", "SQL"],
    tags: ["PHP", "SQL"],
  },
  {
    id: "rail",
    title: "SupRailRoad App",
    image: "/images/Project/Suprailroad.webp",
    description: {
      en: "A modern transportation app design created in Figma with intuitive UI and real-time booking system.",
      fr: "Design d'application de transport moderne créé sur Figma avec UI intuitive et système de réservation en temps réel."
    },
    tech: ["Figma", "UI", "UX"],
    tags: ["Figma", "UI", "UX"],
  },
];

export const tracks = [
  { 
    title: "Girls Want Girls", 
    artist: "Drake feat. Lil Baby", 
    cover: "/images/Cover/CLB.webp",
    audio: "/audio/Girls-want-girls.mp3"
  },
  { 
    title: "Dumbo", 
    artist: "Travis Scott", 
    cover: "/images/Cover/Jackboys.webp",
    audio: "/audio/Dumbo.mp3"
  },
  { 
    title: "Joli", 
    artist: "Zed", 
    cover: "/images/Cover/Joli.webp",
    audio: "/audio/Joli.mp3"
  },
  { 
    title: "Broski", 
    artist: "Timar", 
    cover: "/images/Cover/Broski.webp",
    audio: "/audio/Broski.mp3"
  },
];

export const socials = [
  { name: "LinkedIn", url: "https://linkedin.com/in/raphaël-pires", icon: "ri-linkedin-fill" },
  { name: "GitHub", url: "https://github.com/raphaelprs0", icon: "ri-github-fill" },
  { name: "Instagram", url: "https://instagram.com/raphaelprs", icon: "ri-instagram-line" },
];

export const languages = [
  { id: "french", level: "native" },
  { id: "english", level: "fluent" },
  { id: "spanish", level: "intermediate" },
] as const;
