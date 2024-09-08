const express = require('express'); 
const {register, login} = require('../controllers/authController'); 

const router = express.Router(); // importando 'modulo' de rotas do express





/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Autenticação de usuários 
 */
/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Registra um novo usuário
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userName:
 *                 type: string
 *                 description: O nome do usuário
 *               password:
 *                 type: string
 *                 description: A senha do usuário
 *               email:
 *                 type: string
 *                 description: O email do usuário
 *     responses:
 *       201:
 *         description: Usuário registrado com sucesso
 *       400:
 *         description: Erro na requisição
 */

router.post('/register', register); 

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Realiza login do usuário
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userName:
 *                 type: string
 *                 description: Nome do usuário 
 *               email:
 *                   type: string
 *                   description: Email do usuário 
 *               password:
 *                 type: string
 *                 description: Senha do usuário 
 *     responses:
 *       200:
 *         description: Token JWT gerado
 *       401:
 *         description: Credenciais inválidas
 */
router.post('/login', login);
module.exports = router;