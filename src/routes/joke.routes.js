import { getAllJokes, getOneJoke, getRandomJoke,  addJoke} from "../controllers/joke.controller.js";
import { Router } from "express";

const router = Router();

/**
 * @swagger
 * /api/v1/jokes:
 *   get:
 *     summary: Récupère toutes les blagues
 *     responses:
 *       200:
 *         description: Liste des blagues
 */
router.get('/', getAllJokes);

/**
 * @swagger
 * /api/v1/jokes/random:
 *   get:
 *     summary: Récupère une blague aléatoire
 *     responses:
 *       200:
 *         description: Une blague aléatoire
 */
router.get('/random', getRandomJoke);

/**
 * @swagger
 * /api/V1/jokes/{id}:
 *   get:
 *     summary: Récupère une blague par son id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: L'id de la blague
 *     responses:
 *       200:
 *         description: Blague trouvée
 *       404:
 *         description: Blague non trouvée
 */
router.get('/:id', getOneJoke);

/**
 * @swagger
 * /api/v1/jokes:
 *   post:
 *     summary: Ajoute une nouvelle blague
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               question:
 *                 type: string
 *               answer:
 *                 type: string
 *     responses:
 *       201:
 *         description: Blague créée
 *       400:
 *         description: Données invalides
 */
router.post('/', addJoke);

export default router;
