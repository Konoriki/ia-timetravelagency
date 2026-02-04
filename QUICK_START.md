# ⚡ TimeTravel Agency - Quick Start Guide

## 🎯 En 5 Minutes

### 1️⃣ Cloner & Installer (2 min)
```bash
# Télécharger le code
git clone <votre-repo>
cd timetravel-agency

# Installer dépendances
npm install
```

### 2️⃣ Démarrer en Local (1 min)
```bash
npm run dev
# Ouvrir http://localhost:3000
```

### 3️⃣ Vérifier que tout fonctionne (2 min)
- ✅ Hero section visible
- ✅ 3 cartes destinations
- ✅ Bouton chatbot en bas à droite
- ✅ Pas d'erreurs console (F12)

**Voilà! 🎉 Vous êtes prêt!**

---

## 📋 Files à Connaître

| Fichier | Rôle | Modifier Pour |
|---------|------|---------------|
| `app/page.tsx` | Accueil | Changer layout |
| `components/Hero.tsx` | Top section | Ajouter vidéo/parallax |
| `components/Chatbot.tsx` | Chat widget | Améliorer IA |
| `components/DestinationCard.tsx` | Cards | Modifier design |
| `tailwind.config.js` | Couleurs | Changer thème |

---

## 🚀 Avant la Remise

```bash
# 1. Build test
npm run build

# 2. Vérifier aucune erreur
npm run lint

# 3. Pousser sur GitHub
git add .
git commit -m "Final: TimeTravel Agency ready"
git push

# 4. Déployer sur Vercel (voir DEPLOYMENT.md)
vercel
```

---

## 🐛 Problèmes Courants

### ❌ "npm: command not found"
**Solution:** Installer Node.js depuis https://nodejs.org

### ❌ "Port 3000 already in use"
**Solution:** 
```bash
npm run dev -- -p 3001
```

### ❌ "Erreur au build"
**Solution:**
```bash
rm -rf .next node_modules
npm install
npm run build
```

---

## 📚 Docs Complètes

- **Détaillé:** [README.md](README.md)
- **Installation:** [SETUP.md](SETUP.md)
- **Déploiement:** [DEPLOYMENT.md](DEPLOYMENT.md)
- **Structure:** [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)
- **Améliorations:** [AI_PROMPTS.md](AI_PROMPTS.md)
- **Remise:** [RENDU_FINAL.md](RENDU_FINAL.md)

---

## 💡 Commandes Utiles

```bash
npm run dev       # Start dev server
npm run build     # Build production
npm start         # Run production build
npm run lint      # Check code

# Git
git status        # Voir changements
git add .         # Ajouter tout
git commit -m "Message"  # Commiter
git push          # Pousser sur GitHub
```

---

## ✅ Checklist Remise

- [ ] Code cloné localement
- [ ] `npm install` complété
- [ ] `npm run dev` fonctionne
- [ ] Aucune erreur console
- [ ] GitHub repo créé
- [ ] Code pushé sur GitHub
- [ ] Déployé sur Vercel
- [ ] URL Vercel fonctionne
- [ ] Chatbot répond
- [ ] Quiz fonctionne
- [ ] Mobile responsive
- [ ] README.md complété
- [ ] Noms équipe ajoutés
- [ ] Document remise Moodle

---

**🚀 C'est parti! Des questions? Voir README.md ou DEPLOYMENT.md**
