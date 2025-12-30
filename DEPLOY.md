# Guide de Déploiement - Rendre le Site Accessible à Tous

## Option 1 : GitHub Pages (Recommandé - Gratuit)

### Étape 1 : Créer le Dépôt sur GitHub

1. Allez sur [github.com](https://github.com) et connectez-vous
2. Cliquez sur **"+"** → **"New repository"**
3. Nom : `learning-online` (ou votre choix)
4. Description : "Plateforme d'éducation en ligne et à domicile"
5. Choisissez **Public**
6. **NE COCHEZ PAS** "Initialize with README"
7. Cliquez sur **"Create repository"**

### Étape 2 : Connecter et Pousser le Code

Dans votre terminal, exécutez (remplacez VOTRE-USERNAME) :

```bash
git remote add origin https://github.com/VOTRE-USERNAME/learning-online.git
git branch -M main
git push -u origin main
```

### Étape 3 : Activer GitHub Pages

1. Allez dans votre dépôt GitHub
2. Cliquez sur **Settings** (en haut)
3. Dans le menu de gauche, cliquez sur **Pages**
4. Sous **Source**, sélectionnez **"main"** branch
5. Cliquez sur **Save**

### Étape 4 : Accéder à Votre Site

Votre site sera disponible à :
**https://VOTRE-USERNAME.github.io/learning-online**

(Peut prendre 1-2 minutes pour être actif)

---

## Option 2 : Netlify (Alternative - Gratuit)

### Méthode Drag & Drop

1. Allez sur [netlify.com](https://netlify.com)
2. Créez un compte (gratuit)
3. Glissez-déposez le dossier du projet sur Netlify
4. Votre site sera déployé automatiquement !

### Méthode Git

1. Connectez votre dépôt GitHub à Netlify
2. Netlify déploiera automatiquement à chaque push

---

## Option 3 : Vercel (Alternative - Gratuit)

1. Allez sur [vercel.com](https://vercel.com)
2. Créez un compte
3. Importez votre dépôt GitHub
4. Déployez en un clic !

---

## Résolution de Problèmes

### Le site ne s'affiche pas correctement

Assurez-vous que tous les liens dans vos fichiers HTML utilisent des chemins relatifs :
- ✅ `href="courses.html"` 
- ❌ `href="/courses.html"` (sans le slash initial)

### Les styles ne se chargent pas

Vérifiez que les chemins CSS sont corrects dans vos fichiers HTML.

