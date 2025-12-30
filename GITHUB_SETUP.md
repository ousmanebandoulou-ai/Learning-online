# Instructions pour Publier sur GitHub

## Étape 1 : Créer un Nouveau Dépôt sur GitHub

1. Allez sur [GitHub.com](https://github.com)
2. Cliquez sur le bouton **"+"** en haut à droite
3. Sélectionnez **"New repository"**
4. Remplissez les informations :
   - **Repository name** : `learning-online` (ou le nom de votre choix)
   - **Description** : "Plateforme d'éducation en ligne et à domicile - Mathématiques, Physique et Chimie"
   - **Visibilité** : Public ou Private (selon votre préférence)
   - **NE COCHEZ PAS** "Initialize this repository with a README" (on a déjà un README)
5. Cliquez sur **"Create repository"**

## Étape 2 : Connecter le Projet Local à GitHub

Après avoir créé le dépôt, GitHub vous donnera des instructions. Utilisez ces commandes :

```bash
# Ajoutez le remote GitHub (remplacez VOTRE-USERNAME par votre nom d'utilisateur GitHub)
git remote add origin https://github.com/VOTRE-USERNAME/learning-online.git

# Renommez la branche en main (si nécessaire)
git branch -M main

# Poussez le code vers GitHub
git push -u origin main
```

## Étape 3 : Vérification

1. Allez sur votre dépôt GitHub
2. Vous devriez voir tous vos fichiers
3. Le README.md s'affichera automatiquement

## Optionnel : Activer GitHub Pages

Pour héberger votre site gratuitement sur GitHub Pages :

1. Allez dans **Settings** de votre dépôt
2. Dans le menu de gauche, cliquez sur **"Pages"**
3. Sous **"Source"**, sélectionnez **"main"** branch
4. Cliquez sur **"Save"**
5. Votre site sera disponible à : `https://VOTRE-USERNAME.github.io/learning-online`

## Commandes Git Utiles

```bash
# Voir l'état des fichiers
git status

# Ajouter tous les fichiers modifiés
git add .

# Faire un commit
git commit -m "Description de vos modifications"

# Pousser vers GitHub
git push

# Récupérer les dernières modifications
git pull
```

## Résolution de Problèmes

### Si vous avez déjà un remote
```bash
# Vérifier les remotes existants
git remote -v

# Supprimer l'ancien remote
git remote remove origin

# Ajouter le nouveau remote
git remote add origin https://github.com/VOTRE-USERNAME/learning-online.git
```

### Si vous avez des erreurs d'authentification
GitHub nécessite maintenant un token d'accès personnel :
1. Allez dans GitHub → Settings → Developer settings → Personal access tokens
2. Créez un nouveau token avec les permissions "repo"
3. Utilisez le token comme mot de passe lors du push

