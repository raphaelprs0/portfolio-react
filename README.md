# Portfolio Raphaël

Portfolio personnel développé avec Next.js 16, React 19 et Three.js.

## 🚀 Stack Technique

- **Next.js 16** - Framework React avec App Router
- **React 19** - Interface utilisateur
- **Three.js + @react-three/fiber** - Animation 3D du background (Silk)
- **TypeScript** - Typage statique
- **CSS Variables** - Styling personnalisé (pas de framework CSS)

## 📁 Structure du Projet

```
portfolio-react/
├── app/                          # App Router Next.js
│   ├── api/                      # API Routes
│   │   └── contact/
│   │       └── route.ts         # Endpoint pour l'envoi d'emails
│   │
│   ├── components/               # Composants React
│   │   ├── About.tsx            # Section "À propos" avec bento grid
│   │   ├── Background.tsx       # Wrapper pour le background Silk 3D
│   │   ├── Contact.tsx          # Formulaire de contact + liens sociaux
│   │   ├── Hero.tsx             # Section d'accueil avec effet typewriter
│   │   ├── Music.tsx            # Lecteur audio avec playlist
│   │   ├── Navbar.tsx           # Navigation pill flottante
│   │   ├── PassionModal.tsx     # Modal pour afficher les passions
│   │   ├── ProjectModal.tsx     # Modal pour afficher les projets
│   │   └── Projects.tsx         # Grille des projets
│   │
│   ├── lib/                      # Utilitaires et données
│   │   ├── data.ts              # Données statiques (skills, projets, tracks...)
│   │   ├── LanguageContext.tsx  # Context React pour i18n (EN/FR)
│   │   └── translations.ts      # Fichier de traductions
│   │
│   ├── globals.css              # Styles CSS globaux
│   ├── layout.tsx               # Layout principal avec LanguageProvider
│   ├── page.tsx                 # Page principale (orchestration des sections)
│   └── favicon.ico              # Favicon
│
├── components/                   # Composants externes
│   └── Silk.jsx                 # Shader Three.js pour l'animation de fond
│
├── public/                       # Assets statiques
│   ├── audio/                   # Fichiers audio MP3 (musique)
│   └── images/
│       ├── Cover/               # Covers des albums (musique)
│       ├── Passions/            # Images des passions
│       └── Project/             # Screenshots des projets
│
├── .env.example                 # Template des variables d'environnement
├── next.config.ts               # Configuration Next.js
├── tsconfig.json                # Configuration TypeScript
└── package.json                 # Dépendances et scripts
```

## 📄 Description des Fichiers

### `/app/components/`

| Fichier | Description |
|---------|-------------|
| `About.tsx` | Affiche la section "À propos" avec un layout bento grid contenant: parcours, compétences techniques, passions, langues et téléchargement du CV |
| `Background.tsx` | Import dynamique du composant Silk (désactivé côté serveur pour éviter les erreurs WebGL) |
| `Contact.tsx` | Formulaire de contact avec champs nom/email/message et grille de liens sociaux (LinkedIn, GitHub, Instagram) |
| `Hero.tsx` | Section d'accueil avec titre animé (effet typewriter qui boucle sur plusieurs phrases) |
| `Music.tsx` | Lecteur audio complet avec: cover de l'album, contrôles (play/pause/prev/next), barre de progression interactive et playlist |
| `Navbar.tsx` | Navigation fixée en bas de l'écran avec effet "glider" qui suit l'onglet actif + bouton de changement de langue |
| `PassionModal.tsx` | Modal qui s'ouvre au clic sur une passion pour afficher l'image et la description détaillée |
| `ProjectModal.tsx` | Modal pour les projets avec image, description, technologies utilisées et liens (GitHub/Live) |
| `Projects.tsx` | Grille de cartes projet avec image, titre et tags technologiques |

### `/app/api/`

| Fichier | Description |
|---------|-------------|
| `contact/route.ts` | API Route POST pour envoyer des emails via Nodemailer (Gmail). Reçoit name, email, message en JSON |

### `/app/lib/`

| Fichier | Description |
|---------|-------------|
| `data.ts` | Contient toutes les données statiques du site: `skills` (compétences), `passions` (avec images et descriptions EN/FR), `projects` (avec descriptions, tech stack, liens), `tracks` (playlist avec audio), `socials` (liens réseaux), `languages` (langues parlées) |
| `LanguageContext.tsx` | Context React qui gère l'état de la langue (EN/FR), stockage en localStorage, et fournit la fonction `t()` pour les traductions |
| `translations.ts` | Objet de traductions avec toutes les chaînes de caractères en anglais et français (navigation, sections, descriptions) |

### `/components/`

| Fichier | Description |
|---------|-------------|
| `Silk.jsx` | Composant Three.js utilisant des shaders GLSL pour créer l'animation fluide de fond (effet "soie"). Paramètres: couleur, vitesse, intensité du bruit |

### Fichiers Racine

| Fichier | Description |
|---------|-------------|
| `globals.css` | CSS complet du site avec variables CSS, reset, composants UI (boutons, cartes, modals), responsive design |
| `layout.tsx` | Layout Next.js qui charge la police Inter, les icônes Remix Icon et wrap l'app dans le LanguageProvider |
| `page.tsx` | Page principale qui orchestre les sections (Home, About, Projects, Music, Contact) et gère la navigation par état |

## 🏃 Commandes

```bash
# Développement
npm run dev

# Build production
npm run build

# Démarrer en production
npm start
```

## 🎨 Personnalisation

### Modifier les couleurs
Éditer les variables CSS dans `app/globals.css`:
```css
:root {
  --bg: #0a0a0a;
  --accent: #f53232;
  --text: #ffffff;
  /* ... */
}
```

### Ajouter un projet
Modifier `app/lib/data.ts` et ajouter un objet dans le tableau `projects`:
```typescript
{
  id: "mon-projet",
  title: "Mon Projet",
  image: "/images/Project/mon-projet.webp",
  description: { en: "...", fr: "..." },
  tech: ["React", "Node.js"],
  tags: ["React", "Node.js"],
  github: "https://github.com/...",
  link: "https://..."
}
```

### Ajouter une traduction
Ajouter les clés dans `app/lib/translations.ts` pour les deux langues (en et fr).

## 📦 Dépendances

- `next` - Framework
- `react` + `react-dom` - UI
- `@react-three/fiber` + `three` - Animation 3D
- `nodemailer` - Envoi d'emails (formulaire de contact)

## ⚙️ Configuration

### Variables d'environnement

Pour activer le formulaire de contact, crée un fichier `.env.local` à la racine :

```env
EMAIL_USER=ton.email@gmail.com
EMAIL_PASS=ton_mot_de_passe_application
```

**Pour Gmail**, tu dois utiliser un **mot de passe d'application** :
1. Active la validation en 2 étapes sur ton compte Google
2. Va dans [Mots de passe des applications](https://myaccount.google.com/apppasswords)
3. Crée un mot de passe pour "Mail"
4. Utilise ce mot de passe généré dans `EMAIL_PASS`

## 📱 Responsive

Le site est entièrement responsive avec des breakpoints à:
- 900px (tablette)
- 600px (mobile)
- 400px (petit mobile)
