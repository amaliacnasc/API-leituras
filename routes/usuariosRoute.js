const express = require("express"); 
const router = express.Router(); // importando 'modulo' de rotas do express
const usuariosController = require("../controllers/usuariosController"); 
const authMiddleware = require('../middleware/authMiddleware');

/**
 * @swagger
 * tags:
 *   name: Usuários
 *   description: Operações relacionadas a usuários
 */


router.get('/', authMiddleware, usuariosController.getAllUsers);
/**
 * @swagger
 * /:
 *   get:
 *     summary: Retorna todos os usuários
 *     tags: [Usuários]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuários
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Usuario'
 *       500:
 *         description: Erro interno do servidor
 */

router.get('/:id', authMiddleware, usuariosController.getUserById); 
/**
 * @swagger
 * /{id}:
 *   get:
 *     summary: Retorna um usuário pelo ID
 *     tags: [Usuários]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Usuário encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       500:
 *         description: Erro interno do servidor
 */

router.put('/:id', authMiddleware, usuariosController.updateUserById); 

/**
 * @swagger
 * /{id}:
 *   put:
 *     summary: Atualiza um usuário pelo ID
 *     tags: [Usuários]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userName:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro interno do servidor
 */

router.delete('/:id',authMiddleware,  usuariosController.deleteUserById);


/**
 * @swagger
 * /{id}:
 *   delete:
 *     summary: Deleta um usuário pelo ID
 *     tags: [Usuários]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Usuário deletado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *       500:
 *         description: Erro interno do servidor
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Usuario:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: "607f1f77bcf86cd799439011"
 *         userName:
 *           type: string
 *           example: "usuarioExemplo"
 *         email:
 *           type: string
 *           example: "usuario@exemplo.com"
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

module.exports = router;