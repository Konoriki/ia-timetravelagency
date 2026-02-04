# 📁 Structure du Projet TimeTravel Agency

```
timetravel-agency/
│
├── 📂 app/                          # Next.js App Router
│   ├── layout.tsx                   # Layout global + metadata
│   ├── page.tsx                     # Page d'accueil (/)
│   ├── 📂 booking/
│   │   └── page.tsx                 # Page de réservation (/booking)
│   ├── 📂 quiz/
│   │   └── page.tsx                 # Quiz personnalisé (/quiz)
│   └── 📂 api/                      # Routes API (optionnel)
│       └── chat.ts                  # Chatbot API endpoint
│
├── 📂 components/                   # Composants React réutilisables
│   ├── Header.tsx                   # Navigation fixe
│   ├── Hero.tsx                     # Section héro d'accueil
│   ├── Destinations.tsx             # Galerie 3 destinations
│   ├── DestinationCard.tsx          # Card destination individuelle
│   ├── Chatbot.tsx                  # Widget chatbot flottant
│   ├── PersonalizedQuiz.tsx         # Composant quiz interactif
│   └── Footer.tsx                   # Footer riche
│
├── 📂 styles/                       # Fichiers CSS/Styles
│   └── globals.css                  # Styles globaux + tailwind
│
├── 📂 public/                       # Assets statiques
│   ├── favicon.ico
│   ├── 📂 images/                   # Images locales (si nécessaire)
│   └── 📂 videos/                   # Vidéos (optionnel)
│
├── 📂 lib/                          # Utilitaires & helpers
│   ├── utils.ts                     # Fonctions utilitaires
│   ├── constants.ts                 # Constantes du projet
│   ├── types.ts                     # Types TypeScript
│   └── env.ts                       # Validation environnement
│
├── 📂 hooks/                        # Custom React Hooks
│   ├── useWindowSize.ts
│   ├── useFetch.ts
│   └── useLocalStorage.ts
│
├── 📄 package.json                  # Dépendances npm
├── 📄 tsconfig.json                 # Configuration TypeScript
├── 📄 next.config.js                # Configuration Next.js
├── 📄 tailwind.config.js            # Configuration Tailwind CSS
├── 📄 postcss.config.js             # Configuration PostCSS
├── 📄 .env.example                  # Variables d'environnement (template)
├── 📄 .gitignore                    # Fichiers ignorés Git
│
├── 📄 README.md                     # Documentation complète
├── 📄 SETUP.md                      # Installation & configuration
├── 📄 DEPLOYMENT.md                 # Guide déploiement
├── 📄 AI_PROMPTS.md                 # Prompts pour amélioration
├── 📄 RENDU_FINAL.md                # Document remise Moodle
└── 📄 PROJECT_STRUCTURE.md          # Ce fichier


```

---

## 📋 Détail des Fichiers

### 🔧 Configuration

#### `package.json`
- Dépendances du projet
- Scripts build/dev/start
- Métadonnées du projet

#### `tsconfig.json`
- Configuration compilateur TypeScript
- Paths aliases (@/*)
- Compilation options

#### `next.config.js`
- Configuration Next.js
- Image optimization
- Build settings

#### `tailwind.config.js`
- Thème colors (accent doré)
- Extensions animations
- Responsive breakpoints

#### `postcss.config.js`
- Configuration PostCSS
- Tailwind + Autoprefixer

#### `.env.example`
- Template variables d'environnement
- Documentation des vars optionnelles

#### `.gitignore`
- Exclusions Git
- node_modules, .next, etc.

---

### 📂 App Directory

#### `app/layout.tsx`
**Rôle:** Root layout global
**Contient:**
- `<html>` et `<body>`
- Header et Footer
- Métadonnées SEO
- Global providers (thème, etc)

#### `app/page.tsx`
**Rôle:** Page d'accueil (Route: /)
**Contient:**
- Initialisation AOS
- Import Hero, Destinations, Chatbot
- SEO optimisé

#### `app/booking/page.tsx`
**Rôle:** Page de réservation (Route: /booking)
**Contient:**
- Formulaire réservation
- Calcul prix dynamique
- Confirmation commande
- FAQ intégrée

#### `app/quiz/page.tsx`
**Rôle:** Page quiz personnalisé (Route: /quiz)
**Contient:**
- Import PersonalizedQuiz component

---

### 🎨 Components

#### `Header.tsx`
**Rôle:** Navigation principale
**Imports:** Framer Motion, Link
**Features:**
- Logo animé
- Menu desktop + mobile
- Hamburger responsif
- CTA "Réserver"
- Sticky positioning

#### `Hero.tsx`
**Rôle:** Section d'accueil captivante
**Imports:** Framer Motion, useState, useEffect
**Features:**
- Parallax scroll effect
- H1 titre principal
- Sous-titre descriptif
- 2 CTA buttons
- Animation chevron infini

#### `Destinations.tsx`
**Rôle:** Galerie 3 destinations
**Imports:** Framer Motion, DestinationCard
**Features:**
- 3 cartes interactives
- Stagger animation
- Titre section
- Responsive grid

#### `DestinationCard.tsx`
**Rôle:** Card destination individuelle
**Imports:** Framer Motion, Image, useState
**Features:**
- Image avec lazy loading
- Gradient overlay
- Titre + descriptif
- Points forts (liste)
- Prix affichage
- Bouton réserver
- Hover effects

#### `Chatbot.tsx`
**Rôle:** Widget chatbot conversationnel
**Imports:** Framer Motion, useState, useRef
**Features:**
- Bouton flottant élégant
- Modal chat responsive
- Historique messages
- Input personne
- Bouton send
- IA réponses contextuelles
- Animations fluides

#### `PersonalizedQuiz.tsx`
**Rôle:** Quiz de destination personnalisé
**Imports:** Framer Motion, useState
**Features:**
- 4 questions progressives
- Progress bar
- Recommandation IA
- Affichage résultat
- Animation transitions
- Reset quiz

#### `Footer.tsx`
**Rôle:** Pied de page riche
**Imports:** Framer Motion
**Features:**
- 4 colonnes (About, Destinations, Resources, Contact)
- Newsletter signup
- Social links
- Copyright
- Logo
- Animations staggered

---

### 🎨 Styles

#### `styles/globals.css`
**Contient:**
- Reset CSS (margin, padding)
- Scroll behavior
- Custom scrollbar
- Tailwind imports (@tailwind)
- Global fonts
- Animations custom CSS

---

### 🛠️ Utilitaires

#### `lib/utils.ts`
Fonctions helper:
```ts
export function classNames(...classes: any[]) { ... }
export function formatPrice(price: number) { ... }
export function validateEmail(email: string) { ... }
```

#### `lib/constants.ts`
Constantes du projet:
```ts
export const DESTINATIONS = [...]
export const PRICES = {...}
export const API_ENDPOINTS = {...}
```

#### `lib/types.ts`
Types TypeScript:
```ts
interface Destination { ... }
interface Message { ... }
interface BookingForm { ... }
```

#### `lib/env.ts`
Validation vars d'environnement:
```ts
const env = z.object({
  NEXT_PUBLIC_API_URL: z.string(),
  MISTRAL_API_KEY: z.string().optional(),
})
```

---

### 🎣 Hooks Custom

#### `hooks/useWindowSize.ts`
Détecte taille de l'écran
```ts
const [width, height] = useWindowSize()
```

#### `hooks/useFetch.ts`
Hook data fetching
```ts
const { data, loading, error } = useFetch(url)
```

#### `hooks/useLocalStorage.ts`
Persiste state en localStorage
```ts
const [value, setValue] = useLocalStorage(key, initial)
```

---

## 🔄 Data Flow

### Page d'accueil
```
layout.tsx (Header)
  ↓
page.tsx (initialise AOS)
  ├── Hero.tsx (section top)
  ├── Destinations.tsx (galerie)
  │   └── DestinationCard.tsx x3 (cards)
  ├── Chatbot.tsx (widget)
  └── Footer.tsx (footer)
```

### Chatbot Flow
```
Chatbot.tsx
  ├── State: messages[], isOpen, inputValue
  ├── Message display (map messages)
  ├── Input form
  └── getBotResponse(userMessage)
      ├── Check destination keywords
      ├── Check price keywords
      ├── Check reservation keywords
      └── Return response
```

### Quiz Flow
```
PersonalizedQuiz.tsx
  ├── State: currentQuestion, answers, showResult
  ├── Display question + options
  ├── handleAnswer() → generateRecommendation()
  ├── Show result + destination info
  └── Reset option
```

---

## 🎯 Conventions de Code

### Naming
- Components: PascalCase (Header.tsx)
- Fichiers: kebab-case pour styles, camelCase pour logic
- Variables: camelCase
- Constants: UPPER_SNAKE_CASE
- Types: PascalCase

### Imports
```ts
// 1. Imports React/Next.js
import { useState } from "react"
import Image from "next/image"

// 2. Imports libraries
import { motion } from "framer-motion"

// 3. Imports locaux
import Header from "@/components/Header"
import { classNames } from "@/lib/utils"
```

### Exports
```ts
// Default export pour pages et components
export default function ComponentName() { ... }

// Named exports pour utilities
export function helperFunction() { ... }
export const CONSTANT = "value"
```

### Props TypeScript
```ts
interface ComponentProps {
  title: string
  onClick: () => void
  optional?: boolean
}

export default function Component({ title, onClick }: ComponentProps) {
  ...
}
```

---

## 📦 Dépendances Principales

| Package | Version | Rôle |
|---------|---------|------|
| next | ^14.0.0 | Framework SSR |
| react | ^18.2.0 | UI library |
| tailwindcss | ^3.3.0 | Styling |
| framer-motion | ^10.16.0 | Animations |
| aos | ^2.3.4 | Scroll animations |
| axios | ^1.6.0 | HTTP client |

---

## 🚀 Build Process

```
npm run dev
  ↓ (development)
next dev (port 3000)

npm run build
  ↓ (production)
next build
  ├── Compiler TypeScript
  ├── Bundle JS/CSS
  ├── Optimize images
  ├── Static generation
  └── Generate .next/

npm start
  ↓ (run production build)
next start (port 3000)
```

---

## ✅ Quality Checklist

- [ ] Tous les components ont proptypes
- [ ] Pas de console.error en prod
- [ ] Images optimisées (lazy loading)
- [ ] Mobile responsive (testée)
- [ ] Dark mode cohérent
- [ ] Animations < 800ms
- [ ] Aucun warning build
- [ ] SEO meta tags présent
- [ ] Lighthouse 85+
- [ ] TypeScript strict mode

---

## 📚 Extensions Futures

Emplacements pour futures features:

```
app/
├── api/                # API routes
│   ├── chat/
│   ├── booking/
│   └── auth/
├── dashboard/          # Admin panel
├── user/               # User profile
└── blog/               # Blog section

components/
├── Admin/              # Admin components
├── UI/                 # Shadcn/UI peut-être
└── Forms/              # Form components
```

---

**Structure finalisée et documentée pour maintenance facile! 🎉**
