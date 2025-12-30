# 🚀 Déploiement Automatique sur GitHub Pages

## ✅ Ce qui a été configuré

Un workflow GitHub Actions a été créé pour déployer automatiquement votre site à chaque push.

## 📋 Étapes pour Activer le Déploiement

### Option 1 : Activation Manuelle (Recommandé pour la première fois)

1. **Allez sur votre dépôt GitHub** :
   https://github.com/ousmanebandoulou-ai/Learning-online

2. **Cliquez sur "Settings"** (en haut du dépôt)

3. **Dans le menu de gauche, cliquez sur "Pages"**

4. **Sous "Source"**, sélectionnez :
   - **Deploy from a branch** : `main`
   - **Branch** : `main` / `(root)`

5. **Cliquez sur "Save"**

6. **Attendez 1-2 minutes** - GitHub va déployer votre site

7. **Votre site sera accessible à** :
   **https://ousmanebandoulou-ai.github.io/Learning-online**

### Option 2 : Déploiement via GitHub Actions (Automatique)

Le workflow `.github/workflows/deploy.yml` a été créé. Il se déclenchera automatiquement après l'activation de GitHub Pages.

## 🔄 Mise à Jour Automatique

Une fois activé, chaque fois que vous ferez :
```bash
git add .
git commit -m "Vos modifications"
git push
```

Le site sera automatiquement mis à jour en quelques minutes !

## ✅ Vérification

1. Après avoir activé GitHub Pages, allez dans l'onglet **"Actions"** de votre dépôt
2. Vous verrez le workflow de déploiement en cours
3. Une fois terminé (icône verte), votre site sera en ligne

## 🌐 Votre URL

**https://ousmanebandoulou-ai.github.io/Learning-online**

## 📝 Notes

- Le déploiement prend généralement 1-2 minutes
- Le site est **gratuit** et **illimité**
- HTTPS est inclus automatiquement
- Accessible à tous dans le monde entier

---

**Votre site sera bientôt en ligne ! 🎉**

