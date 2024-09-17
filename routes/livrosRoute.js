const express = require("express");
const router = express.Router(); // importando 'modulo' de rotas do express
const livrosController = require("../controllers/livrosController");

/**
 * @swagger
 * /api/livros:
 *   get:
 *     summary: Obtém todos os livros
 *     tags: [Livros]
 *     responses:
 *       200:
 *         description: Lista de livros retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Livro'
 *       500:
 *         description: Erro interno no servidor ao buscar os livros
 */
router.get('/', livrosController.getAllLivros);
router.get('/:id', livrosController.getLivroById); 
/**
 * @swagger
 * /api/livros:
 *   post:
 *     summary: Cria um novo livro
 *     tags: [Livros]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Livro'
 *     responses:
 *       201:
 *         description: Livro criado com sucesso
 *       400:
 *         description: Erro na requisição, dados inválidos
 */
/**
 * @swagger
 * /api/livros/{id}:
 *   get:
 *     summary: Retorna um livro pelo ID
 *     tags: [Livros]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do livro a ser buscado
 *     responses:
 *       200:
 *         description: Livro encontrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Livro'
 *       404:
 *         description: Livro não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Livro não encontrado
 *       500:
 *         description: Erro no servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Erro no servidor
 */

router.post('/', livrosController.createLivro);

/**
 * @swagger
 * /api/livros/{id}:
 *   put:
 *     summary: Atualiza o nome de um livro existente
 *     tags: [Livros]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do livro a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nameLivro:
 *                 type: string
 *                 description: Novo nome do livro
 *     responses:
 *       200:
 *         description: Livro atualizado com sucesso
 *       404:
 *         description: Livro não encontrado
 *       400:
 *         description: Erro ao atualizar o livro, dados inválidos
 */
router.put('/:id', livrosController.updateLivro);

/**
 * @swagger
 * /api/livros/{id}:
 *   delete:
 *     summary: Deleta um livro pelo ID
 *     tags: [Livros]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do livro a ser deletado
 *     responses:
 *       200:
 *         description: Livro excluído com sucesso
 *       404:
 *         description: Livro não encontrado
 *       500:
 *         description: Erro interno no servidor ao deletar o livro
 */
router.delete('/:id', livrosController.deleteLivro);

module.exports = router;

/**
 * @swagger
 * components:
 *   schemas:
 *     Livro:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: ID do livro
 *         nameLivro:
 *           type: string
 *           description: Nome do livro
 *         pages:
 *           type: integer
 *           description: Número de páginas
 *         author:
 *           type: string
 *           description: Autor do livro
 *         description:
 *           type: string
 *           description: Descrição do livro
 *         date:
 *           type: string
 *           format: date
 *           description: Data de publicação
 *         photo:
 *           type: string
 *           description: URL da foto do livro
 */
