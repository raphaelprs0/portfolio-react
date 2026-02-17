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
    title: { en: "Cars", fr: "Voitures" },
    description: { 
      en: "I'm passionate about cars and Motorsports. From F1 to vintage Porsches, I love everything about automotive engineering and design.",
      fr: "Je suis passionné par les voitures et le Motorsport. De la F1 aux Porsche vintage, j'adore tout ce qui touche à l'ingénierie et au design automobile."
    }
  },
  { 
    id: "music", 
    icon: "🎹", 
    image: "/images/Passions/Logic-Pro.webp",
    title: { en: "Music Production", fr: "Production Musicale" },
    description: { 
      en: "I produce beats and music in my free time using Logic Pro. It's a creative outlet that complements my technical work.",
      fr: "Je produis des beats et de la musique pendant mon temps libre avec Logic Pro. C'est un exutoire créatif qui complète mon travail technique."
    }
  },
  { 
    id: "sports", 
    icon: "🥊", 
    image: "/images/Passions/Boxe.webp",
    title: { en: "Sports", fr: "Sports" },
    description: { 
      en: "I practice boxing to stay in shape and maintain discipline. It teaches focus, resilience and dedication.",
      fr: "Je pratique la boxe pour rester en forme et maintenir ma discipline. Ça enseigne la concentration, la résilience et le dévouement."
    }
  },
  { 
    id: "travel", 
    icon: "✈️", 
    image: "/images/Passions/Travel.webp",
    title: { en: "Travel", fr: "Voyages" },
    description: { 
      en: "Exploring new cultures and places broadens my perspective. Every trip is an opportunity to learn and grow.",
      fr: "Explorer de nouvelles cultures et de nouveaux endroits élargit ma perspective. Chaque voyage est une opportunité d'apprendre et de grandir."
    }
  },
  { 
    id: "watches", 
    icon: "⌚", 
    image: "/images/Passions/Rolex.webp",
    title: { en: "Watches", fr: "Montres" },
    description: { 
      en: "I appreciate the craftsmanship and engineering behind fine timepieces. They represent the perfect blend of art and technology.",
      fr: "J'apprécie l'artisanat et l'ingénierie derrière les belles montres. Elles représentent le mélange parfait entre art et technologie."
    }
  },
];

export const projects = [
  {
    id: "grass",
    title: "Laying Grass",
    image: "/images/Project/Laying-grass.webp",
    description: {
      en: "A C++ project simulating grass laying algorithms and terrain generation.",
      fr: "Un projet C++ simulant des algorithmes de pose de gazon et génération de terrain."
    },
    tech: ["C++"],
    tags: ["C++"],
  },
  {
    id: "seo",
    title: "SEO Website",
    image: "/images/Project/seo-website.webp",
    description: {
      en: "A fully optimized SEO website for a freelance developer in Paris.",
      fr: "Un site web entièrement optimisé SEO pour un développeur freelance à Paris."
    },
    tech: ["HTML", "CSS", "SEO"],
    tags: ["HTML", "CSS", "SEO"],
    link: "https://devparisfreelance.fr",
  },
  {
    id: "imdb",
    title: "IMDB Clone",
    image: "/images/Project/imdb.webp",
    description: {
      en: "A movie database clone built with PHP and SQL for database management practice.",
      fr: "Un clone de base de données de films construit avec PHP et SQL."
    },
    tech: ["PHP", "SQL"],
    tags: ["PHP", "SQL"],
    github: "https://github.com/raphaelprs0/imdb-clone",
  },
  {
    id: "rail",
    title: "Suprailroad",
    image: "/images/Project/Suprailroad.webp",
    description: {
      en: "A UI/UX design project for a modern train booking application.",
      fr: "Un projet de design UI/UX pour une application moderne de réservation de train."
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
