# ⌨️ Commandes Essentielles - TimeTravel Agency

## 🚀 Démarrage Rapide

### Installation & Lancement
```bash
# 1. Installation (première fois seulement)
npm install

# 2. Démarrer serveur développement
npm run dev

# 3. Ouvrir dans navigateur
http://localhost:3000

# 4. Arrêter serveur (Ctrl+C)
```

---

## 📦 Npm Commands

### Development
```bash
# Serveur dev sur port 3000
npm run dev

# Serveur dev sur port 3001 (si 3000 occupé)
npm run dev -- -p 3001

# Build production
npm run build

# Serveur production (après build)
npm start

# Vérifier erreurs (linting)
npm run lint

# Nettoyer cache + rebuilder
rm -rf .next node_modules && npm install && npm run build
```

### Debugging
```bash
# Afficher tous les fichiers
npm list

# Vérifier versions
npm -v        # npm version
node -v       # Node version

# Mettre à jour npm
npm install -g npm@latest

# Réinstaller dépendances
npm ci        # Copie exacte package-lock.json
npm install   # Flexible, peut updater
```

---

## 📁 Fichiers & Dossiers

### Voir structure
```bash
# Lister fichiers récursif
ls -la

# Voir dossier courant
pwd

# Aller au dossier projet
cd timetravel-agency

# Aller dossier parent
cd ..

# Dossiers importants
cd app              # Pages Next.js
cd components       # Composants React
cd styles           # CSS/Styles
```

---

## 🔧 Git Commands

### Configuration
```bash
# Vérifier config
git config --list

# Set username
git config --global user.name "Votre Nom"

# Set email
git config --global user.email "email@example.com"
```

### Workflow Courant
```bash
# Vérifier status
git status

# Ajouter tous les changements
git add .

# Ajouter fichier spécifique
git add nom_fichier.tsx

# Commit changements
git commit -m "Message descriptif"

# Pousser sur GitHub
git push

# Tirer changements
git pull

# Voir historique
git log

# Revenir version précédente
git revert HEAD
```

### Branches (optionnel)
```bash
# Voir branches
git branch -a

# Créer branche
git branch nom-branche

# Changer branche
git checkout nom-branche

# Créer + changer
git checkout -b nom-branche

# Fusionner branche
git merge nom-branche

# Supprimer branche
git branch -d nom-branche
```

---

## 📝 Code Editing

### VS Code Shortcuts
```bash
# Ouvrir VS Code dossier courant
code .

# Ouvrir fichier spécifique
code app/page.tsx

# Lancer terminal intégré
Ctrl+` (backtick)

# Quick open fichier
Ctrl+P

# Go to line
Ctrl+G

# Search fichier
Ctrl+F
```

---

## 🌐 Navigation Locale

### Accès Local URLs
```
http://localhost:3000          # Page d'accueil
http://localhost:3000/booking  # Page réservation
http://localhost:3000/quiz     # Quiz personnalisé

DevTools (Inspection):
F12 ou Ctrl+Shift+I
```

---

## 🚀 Déploiement Vercel

### Via CLI
```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel

# Preview URL (test avant production)
vercel --prod

# Voir deployments
vercel list
```

### Via GitHub (Automatique)
```bash
# 1. Push sur GitHub
git add .
git commit -m "Ready for deploy"
git push

# 2. Aller sur Vercel Dashboard
# 3. Connecter repo GitHub
# 4. Clic "Deploy"
# 5. Auto-deploy à chaque push!
```

---

## 🐛 Debugging

### Console Logs
```bash
# Ajouter log dans composant React
console.log('Message debug', variable)

# Voir logs terminal (npm run dev)
# Voir logs navigateur (F12 → Console)

# Nettoyer console
console.clear()
```

### Network Debugging
```bash
# F12 → Network tab
# Voir requêtes HTTP
# Vérifier status codes
# Inspecter responses
```

### Performance Check
```bash
# F12 → Lighthouse
# Cliquer "Analyze page load"
# Voir Performance score
# Voir recommendations
```

---

## 📦 Package Management

### Installer nouveau package
```bash
# Latest version
npm install nom-package

# Spécific version
npm install nom-package@1.2.3

# Save to package.json
npm install nom-package --save

# Save as dev dependency
npm install nom-package --save-dev
```

### Supprimer package
```bash
npm uninstall nom-package
```

### Update packages
```bash
# Check for updates
npm outdated

# Update specific
npm update nom-package

# Update all
npm update
```

---

## 🔐 Environment Variables

### Créer .env.local
```bash
# Copy template
cp .env.example .env.local

# Edit fichier
nano .env.local    # Mac/Linux
notepad .env.local # Windows

# Redémarrer serveur pour charger vars
npm run dev
```

### Accéder variables
```tsx
// Dans composant React
const apiUrl = process.env.NEXT_PUBLIC_API_URL

// Dans serveur (Node.js)
const apiKey = process.env.SECRET_KEY

// Note: NEXT_PUBLIC_ = accessible client
//       Sans prefix = serveur only (sécurisé)
```

---

## 🧪 Testing (Optional)

### Jest Tests
```bash
# Run tests
npm test

# Watch mode
npm test -- --watch

# Coverage
npm test -- --coverage
```

### Build Test
```bash
# Test build complet
npm run build

# Test serveur production
npm start
```

---

## 🔍 Troubleshooting Commands

### "Command not found"
```bash
# Node/npm not installed
# Solution: https://nodejs.org

# Restart terminal après install Node
```

### Port déjà utilisé
```bash
# Kill process sur port 3000
# Mac/Linux:
lsof -ti:3000 | xargs kill -9

# Windows (PowerShell):
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process
```

### Module errors
```bash
# Réinstaller node_modules
rm -rf node_modules package-lock.json
npm install

# Ou plus rapide:
npm ci
```

### Build errors
```bash
# Clear cache
rm -rf .next

# Rebuild
npm run build

# Check pour TypeScript errors
npm run lint
```

---

## 📊 Useful One-Liners

```bash
# Créer repo GitHub (remplacer REPO)
git remote add origin https://github.com/USERNAME/REPO.git

# Quick deploy
npm run build && vercel --prod

# Voir dépendances
npm ls

# Voir dépendances outdated
npm outdated

# Voir disk usage
du -sh node_modules

# Compter lines of code
find . -name "*.tsx" -o -name "*.ts" | xargs wc -l
```

---

## ⌨️ Raccourcis VSCode Essentiels

| Raccourci | Action |
|-----------|--------|
| `Ctrl+S` | Sauvegarder fichier |
| `Ctrl+Shift+P` | Command palette |
| `Ctrl+/` | Commenter code |
| `Alt+Up/Down` | Déplacer ligne |
| `Ctrl+Shift+K` | Supprimer ligne |
| `Ctrl+D` | Select mot actuel |
| `Ctrl+K Ctrl+0` | Fold all |
| `Ctrl+K Ctrl+J` | Unfold all |

---

## 📞 Getting Help

```bash
# Aide npm
npm help

# Aide specific command
npm help install

# Documentation online
# Node: https://nodejs.org/docs
# npm: https://docs.npmjs.com

# Ask IA (Copilot dans VSCode)
# Ctrl+I pour inline suggestions
```

---

## ✅ Daily Workflow

```bash
# Chaque matin:
git pull                    # Get latest changes
npm install                 # Update dependencies
npm run dev                 # Start dev server

# Pendant coding:
# - Modifier files dans VSCode
# - Voir changements auto-refresh (localhost:3000)
# - F12 pour déboguer

# Avant commit:
npm run lint                # Check code quality
npm run build              # Test build

# Commit + push:
git add .
git commit -m "Feature: Description"
git push

# Deploy:
# - Vercel auto-deploys from GitHub
# - Voir status sur Vercel Dashboard
```

---

## 🎯 Pro Tips

```bash
# Créer alias pour commandes longues
alias devstart="npm run dev"
alias gitpush="git add . && git commit -m 'Update' && git push"

# Utiliser npm scripts dans package.json
# Écrire vos propres commands personnalisés

# Utiliser terminal VS Code intégré
# Évite d'ouvrir terminal externe
```

---

## 🚀 Cheat Sheet Rapide

```bash
npm i                    # Install deps
npm run dev              # Dev server
npm run build            # Production build
npm start                # Run prod build
npm run lint             # Check code
git add .                # Stage changes
git commit -m "msg"      # Commit
git push                 # Push GitHub
vercel                   # Deploy Vercel
```

---

**Économiser du temps = Plus de développement! ⚡**

Mémoriser ces 10 commandes = 90% de l'utilisation quotidienne
