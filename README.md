# API de Questionnaires

Une API simple pour la gestion de questionnaires, similaire à Typeform.

## Fonctionnalités

- Création d'un questionnaire avec plusieurs questions.
- Récupération du questionnaire avec ses questions.
- Réponse aux questions du questionnaire par un utilisateur.
- Récupération des réponses aux questions par utilisateur pour un questionnaire.

## Technologies utilisées

- Node.js
- Express.js
- MongoDB
- Mocha (pour les tests)
- TypeScript

## Installation en local

1. **Cloner le dépôt** 
2. **Installer les dépendances** :

```bash 
    npm install
```


3. **Configurer la base de données** :

    Assurez-vous d'avoir MongoDB installé et en cours d'exécution. 

4. **Démarrer le serveur** :

```bash 
    npm start
```

L'API devrait maintenant être en cours d'exécution sur `http://localhost:3000`.

## Routes disponibles

- **Créer un questionnaire** :
- `POST /api/questionnaires`

- **Récupérer un questionnaire** :
- `GET /api/questionnaires/:id`

- **Répondre à un questionnaire** :
- `POST /api/questionnaires/:id/responses`

- **Récupérer les réponses d'un utilisateur pour un questionnaire** :
- `GET /api/questionnaires/:id/responses/:userId`

## Tests

Pour exécuter les tests, utilisez la commande suivante :

```bash 
    npm run test
```


## Docker

Un `Dockerfile` est inclus pour faciliter le déploiement. Pour construire et exécuter l'API avec Docker :

```bash
    docker build -t api-questionnaires .
    docker run -p 3000:3000 api-questionnaires
```