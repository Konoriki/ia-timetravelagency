# TimeTravel Agency - Webapp Interactive

> Webapp interactive pour une agence de voyage temporel fictive. Explore les plus grandes époque de l'histoire avec une interface immersive.

**🎓 Projet Pédagogique** | M1/M2 Digital & IA | Février 2026

---

## 📋 Table des matières

- [🎯 Vue d'ensemble](#vue-densemble)
- [✨ Fonctionnalités](#fonctionnalités)
- [🛠️ Stack Technique](#stack-technique)
- [🤖 IA Utilisée](#ia-utilisée)
- [📦 Installation](#installation)
- [🚀 Déploiement](#déploiement)
- [👥 Équipe](#équipe)
- [📄 Licence](#licence)

---

## 🎯 Vue d'ensemble

TimeTravel Agency est une webapp interactive qui met en scène une agence de voyage temporel fictive et permet aux utilisateurs de :

- ✅ Découvrir 3 destinations temporelles immersives
- ✅ Interagir avec un agent conversationnel IA
- ✅ Personnaliser leur voyage selon leurs préférences
- ✅ Réserver des voyages temporels

**Destinations disponibles:**
- 🗼 **Paris 1889** - Belle Époque, Tour Eiffel, Exposition Universelle
- 🦖 **Crétacé** -65M d'années - Dinosaures, nature préhistorique
- 🎨 **Florence 1504** - Renaissance, Michel-Ange, Léonard de Vinci

---

## ✨ Fonctionnalités

### Phase 2 - Génération de Code & Interface

✅ **Page d'accueil (Hero Section)**
- Animation héro captivante avec parallax
- CTA (Call-To-Action) vers destinations
- Design responsive mobile-first

✅ **Galerie de Destinations**
- 3 cards interactives avec visuels haute qualité
- Informations détaillées par époque
- Hover effects et animations fluides
- Points forts et tarification

✅ **Animations & Transitions**
- Framer Motion pour animations fluides
- AOS (Animate On Scroll) pour scroll triggers
- Micro-interactions sur boutons et cards
- Transitions entre sections

### Phase 3 - Intelligence Artificielle

✅ **Chatbot IA Conversationnel**
- Widget flottant élégant
- Réponses intelligentes basées sur contexte
- Conseils personnalisés sur destinations
- FAQ automatisée

✅ **Quiz Personnalisé (Optionnel)**
- 4 questions pour évaluer préférences
- Recommandation automatique de destination
- Explication personnalisée

### Phase 4 - Déploiement

✅ **Documentation Complète**
- README avec setup instructions
- Architecture projet documentée
- Crédits IA et ressources

✅ **Déploiement Vercel**
- Déploiement automatique CI/CD
- URL publique fonctionnelle
- Performance optimisée

---

## 🛠️ Stack Technique

| Composant | Technologie |
|-----------|-------------|
| **Framework** | Next.js 14+ |
| **Librairie UI** | React 18+ |
| **Styling** | Tailwind CSS 3.3+ |
| **Animations** | Framer Motion 10.16+ |
| **Scroll Animations** | AOS 2.3+ |
| **HTTP Client** | Axios 1.6+ |
| **Hébergement** | Vercel |
| **Domaine** | Personnalisé (optionnel) |

**Node version:** 18.17+  
**Package Manager:** npm / yarn

---

## 🤖 IA Utilisée

### Génération de Code
- **Outil Principal:** Bolt.new (StackBlitz)
- **Modèle:** Claude 3.5 Sonnet
- **Prompts:** Génération complète architecture + composants

### Chatbot IA
- **Type:** Chatbot stateless avec règles de contexte
- **Fonctionnement:** Réponses basées sur mots-clés
- **Intégration:** Locale (pas d'API externe)
- **Personnalité:** Assistant professionnel et enthousiaste

### Assets & Visuels
- **Destinations Images:** Unsplash API (images libres)
- **Design System:** Généré via Prompt Tailwind

---

## 📦 Installation

### Prérequis
- Node.js 18.17+ installé
- npm ou yarn
- Git (optionnel)

### Étapes d'installation

```bash
# 1. Cloner le repository (ou télécharger les fichiers)
git clone <votre-repo-url>
cd timetravel-agency

# 2. Installer les dépendances
npm install
# ou
yarn install

# 3. Créer fichier d'environnement
cp .env.example .env.local

# 4. Lancer le serveur de développement
npm run dev
# ou
yarn dev

# L'app sera disponible sur http://localhost:3000
```

### Structure du Projet

```
timetravel-agency/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Page d'accueil
│   └── api/                # Routes API (optionnel)
├── components/
│   ├── Header.tsx          # Navigation
│   ├── Hero.tsx            # Section héro
│   ├── Destinations.tsx    # Galerie destinations
│   ├── DestinationCard.tsx # Card destination
│   ├── Chatbot.tsx         # Widget chatbot
│   ├── PersonalizedQuiz.tsx # Quiz optionnel
│   └── Footer.tsx          # Footer
├── styles/
│   └── globals.css         # Styles globaux
├── public/                 # Fichiers statiques
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## 🚀 Déploiement

### Option 1: Vercel (Recommandé - Gratuit)

```bash
# 1. Installer Vercel CLI
npm i -g vercel

# 2. Déployer
vercel

# 3. Suivre les instructions et obtenez votre URL publique
```

**Avantages:**
- ✅ Déploiement 1-clic depuis Bolt.new
- ✅ Gratuit et illimité
- ✅ Domaine personnalisé disponible
- ✅ HTTPS automatique
- ✅ Analytics inclus

### Option 2: Netlify (Alternative gratuite)

```bash
npm run build
# Drag & drop le dossier .next sur Netlify
```

### Option 3: GitHub Pages

```bash
npm run build
# Pousser sur GitHub et activer Pages
```

---

## 🎬 Features Détaillées

### Chatbot Intelligent
- Répond aux questions sur destinations
- Affiche tarifs et tarifs
- Aide avec réservations
- Personnalité chaleureuse et professionnelle

**Questions supportées:**
```
- "Parlez-moi de Paris 1889"
- "Quel est le prix du Crétacé?"
- "Comment réserver?"
- "Quelle destination me convient?"
```

### Quiz Personnalisé
- 4 questions adaptées
- Recommandation intelligente
- Explication personnalisée
- Accès direct à la réservation

---

## 📊 Performance & Optimisation

✅ **Images:** Lazy loading via Next.js Image
✅ **CSS:** Minified via Tailwind production build
✅ **JS:** Code splitting automatique Next.js
✅ **Animations:** GPU accelerated (Framer Motion)
✅ **Mobile:** Fully responsive
✅ **Accessibilité:** Semantic HTML + ARIA labels

**Scores Lighthouse cibles:**
- Performance: 85+
- Accessibility: 90+
- Best Practices: 85+
- SEO: 90+

---

## 🔐 Variables d'Environnement

Créer un fichier `.env.local`:

```env
# Optionnel - API externe
NEXT_PUBLIC_API_URL=http://localhost:3000
MISTRAL_API_KEY=sk_your_key_here

# Optionnel - Analytics
NEXT_PUBLIC_GA_ID=
```

---

## 🐛 Troubleshooting

### Port 3000 déjà utilisé
```bash
npm run dev -- -p 3001
```

### Build échoue
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Animations figées
- Vérifier les dépendances Framer Motion
- Vérifier que AOS est bien initié dans `page.tsx`

---

## 📚 Ressources & Crédits

### Outils Utilisés
- **Code Generator:** [Bolt.new](https://bolt.new) - Claude 3.5 Sonnet
- **UI Framework:** [Tailwind CSS](https://tailwindcss.com)
- **Animations:** [Framer Motion](https://framer.com/motion)
- **Scroll Animations:** [AOS](https://michalsnik.github.io/aos/)
- **Images:** [Unsplash](https://unsplash.com)

### Documentation Utile
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)

### Bibliothèques Externes
```json
{
  "next": "^14.0.0",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "tailwindcss": "^3.3.0",
  "framer-motion": "^10.16.0",
  "aos": "^2.3.4",
  "axios": "^1.6.0"
}
```

---

## 👥 Équipe du Projet

**Noms des membres du groupe:**
- [ ] Nom Prénom - Rôle
- [ ] Nom Prénom - Rôle
- [ ] Nom Prénom - Rôle
- [ ] Nom Prénom - Rôle

---

## 📄 Licence

Projet pédagogique - M1/M2 Digital & IA  
Université/École: [À remplir]  
Date: Février 2026  
Tous droits réservés

**License:** CC-BY-NC-SA 4.0 (Pour usage éducatif)

---

## 📞 Contact & Support

- **Email:** [À remplir]
- **GitHub:** [À remplir]
- **Netlify/Vercel URL:** [À remplir]

---

### 🚀 Prochaines Étapes

- [ ] Ajouter authentification utilisateur
- [ ] Intégrer vraie API de chatbot (Mistral/OpenAI)
- [ ] Panier d'achat et paiement
- [ ] Système de réservation backend
- [ ] Dashboard administrateur
- [ ] Multilingue (FR/EN)
- [ ] Notifications email
- [ ] Blog avec contenu destination

---

**Fait avec ❤️ par l'équipe TimeTravel Agency**  
Généré avec IA • 2026
