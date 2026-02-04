# TimeTravel Agency - Installation & Configuration

## Quick Start

```bash
# Installation
npm install

# Développement
npm run dev

# Build Production
npm run build
npm start
```

---

## Fichiers de Configuration

### `.env.local` (Exemple)
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### `package.json` - Scripts disponibles
- `npm run dev` - Serveur développement
- `npm run build` - Build production
- `npm start` - Serveur production
- `npm run lint` - Vérifier code

---

## Déploiement Vercel

### Methode 1: Via CLI
```bash
npm install -g vercel
vercel
```

### Methode 2: Via GitHub
1. Push code sur GitHub
2. Connecter repository à Vercel
3. Auto-déploiement à chaque push

---

## Architecture

```
Next.js App Router
├── Layout global + styles
├── Page d'accueil
├── Components React
├── Tailwind CSS
├── Framer Motion (animations)
└── AOS (scroll animations)
```

---

## Optimisations

✅ Image optimization  
✅ CSS minification  
✅ Code splitting  
✅ Static generation  
✅ SEO optimization  

---

## Troubleshooting

**Port occupé:** `npm run dev -- -p 3001`  
**Erreur build:** `rm -rf .next && npm run build`  
**Module manquant:** `npm install`

---

Docs complètes: Voir README.md
