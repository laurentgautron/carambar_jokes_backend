# Carambar & Co - Backend API

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=white)

Backend API pour gérer les blagues de l’application **Carambar & Co**.  
L’API est versionnée et permet de créer, consulter et récupérer des blagues aléatoires.

---

## 🔗 Liens importants

- **Repo FrontEnd (GitHub)** : [https://github.com/laurentgautron/carambar_jokes_frontend](https://github.com/laurentgautron/carambar_jokes_frontend)  
- **Documentation Swagger** : [https://carambar-jokes-j6nh.onrender.com/api-docs/](https://carambar-jokes-j6nh.onrender.com/api-docs/)  
- **Backend déployé sur Render** : [https://carambar-jokes-j6nh.onrender.com](https://carambar-jokes-j6nh.onrender.com)

---

## 📝 Routes disponibles

| Route | Méthode | Description |
|-------|---------|-------------|
| `/api/v1/jokes` | GET | Récupère toutes les blagues |
| `/api/v1/jokes/id` | GET | Récupère une blague spécifique par ID |
| `/api/v1/jokes/random` | GET | Récupère une blague aléatoire |
| `/api/v1/jokes` | POST | Ajoute une nouvelle blague |

> Testez les endpoints directement via Swagger : [Swagger UI](https://carambar-jokes-j6nh.onrender.com/api-docs/)
