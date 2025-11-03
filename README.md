# Plateforme d'Apprentissage des Animations SVG

Une application web moderne pour apprendre les animations SVG de manière structurée et interactive.

## Fonctionnalités

- **Navigation par modules et leçons** : Parcours structuré en modules hiérarchisés
- **Système d'onglets** : Théorie, exemples interactifs et mini-projets pour chaque leçon
- **Aperçu en temps réel** : Visualisation directe du code SVG
- **Contenu pédagogique complet** : Théorie avec support Markdown, exemples de code, et projets pratiques
- **Design responsive** : Optimisé pour desktop et mobile
- **Interface moderne** : Utilisation de Tailwind CSS pour un design épuré

## Technologies utilisées

- **Next.js 14** : Framework React avec App Router
- **TypeScript** : Typage statique pour un code robuste
- **Tailwind CSS** : Framework CSS utilitaire
- **React Markdown** : Rendu du contenu pédagogique
- **GSAP** : Bibliothèque d'animations (à intégrer dans les leçons)

## Installation

1. Cloner le repository
```bash
git clone https://github.com/kamzal57/webapp-menus-ongletsV2.git
cd webapp-menus-ongletsV2
```

2. Installer les dépendances
```bash
npm install
```

3. Lancer le serveur de développement
```bash
npm run dev
```

4. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur

## Structure du projet

```
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── modules/       # Endpoint pour les modules
│   ├── globals.css        # Styles globaux
│   ├── layout.tsx         # Layout racine
│   └── page.tsx           # Page principale
├── components/            # Composants React
│   ├── Navigation.tsx     # Navigation par modules
│   └── LessonContent.tsx  # Affichage du contenu des leçons
├── data/                  # Données des modules et leçons
│   └── modules.json       # Structure du parcours pédagogique
├── lib/                   # Utilitaires et types
│   └── types.ts          # Types TypeScript
└── public/               # Fichiers statiques

```

## Structure des données

Les modules sont définis dans `data/modules.json` avec la structure suivante :

```json
{
  "id": "module-1",
  "title": "Titre du module",
  "description": "Description",
  "order": 1,
  "lessons": [
    {
      "id": "lesson-1-1",
      "title": "Titre de la leçon",
      "order": 1,
      "theory": "Contenu théorique en Markdown",
      "codeExample": {
        "html": "Code HTML/SVG",
        "description": "Description de l'exemple"
      },
      "miniProject": {
        "title": "Titre du projet",
        "description": "Description",
        "instructions": "Instructions étape par étape"
      }
    }
  ]
}
```

## Modules disponibles

1. **Introduction aux SVG** : Découverte des bases et des formes SVG
2. **Animations CSS avec SVG** : Transitions et keyframes
3. **Animations JavaScript et GSAP** : Animations avancées
4. **Projets avancés** : Graphiques et visualisations interactives

## Développement futur

- [ ] Éditeur de code intégré avec coloration syntaxique
- [ ] Sauvegarde de la progression de l'utilisateur
- [ ] Backoffice pour l'édition des contenus
- [ ] Plus d'exemples interactifs
- [ ] Système de quiz et d'évaluation
- [ ] Export des projets créés

## Scripts disponibles

- `npm run dev` : Lance le serveur de développement
- `npm run build` : Compile l'application pour la production
- `npm run start` : Lance le serveur de production
- `npm run lint` : Vérifie le code avec ESLint

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## Licence

Ce projet est sous licence MIT.
