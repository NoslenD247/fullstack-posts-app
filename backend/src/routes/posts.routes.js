import { Router } from "express";
import { getPosts } from "../controller/posts.controller.js"

const router = Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     PostSummary:
 *       type: object
 *       required:
 *         - name
 *         - postCount
 *       properties:
 *         name:
 *           type: string
 *           description: Nombre del usuario
 *         postCount:
 *           type: integer
 *           description: Cantidad de posts del usuario
 *       example:
 *         name: "Pedro Gonzalez"
 *         postCount: 10
 */

/**
 * @swagger
 * tags:
 *   name: Posts
 *   description: API que devuelve los posts agrupados por usuario
 */

/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Obtiene posts agrupados por usuario
 *     description: Devuelve un array de objetos con el nombre del usuario y la cantidad de posts
 *     tags: [Posts]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Filtra los posts por nombre de usuario (opcional)
 *         required: false   # <--- opcional, Swagger lo entiende como no obligatorio
 *     responses:
 *       200:
 *         description: Lista de usuarios con cantidad de posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/PostSummary'
 *       500:
 *         description: Error interno del servidor
 */
router.get("/", getPosts)

export default router