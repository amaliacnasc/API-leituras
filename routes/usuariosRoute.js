const express = require("express"); 
const router = express.Router(); // importando 'modulo' de rotas do express
const usuariosController = require("../controllers/usuariosController"); 
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, usuariosController.getAllUsers);
router.put('/:id', authMiddleware, usuariosController.updateUserById); 
router.delete('/:id',authMiddleware,  usuariosController.deleteUserById);

module.exports = router;