const express = require("express"); 
const router = express.Router(); // importando 'modulo' de rotas do express
const livrosController = require("../controllers/livrosController"); 

router.get('/', livrosController.getAllLivros); 
router.get('/:nameLivro', livrosController.getLivroByName); 
router.post('/', livrosController.createLivro); 
router.put('/:nameLivro', livrosController.updateLivro); 
router.delete('/:nameLivro', livrosController.deleteLivro);

module.exports = router; 

console.log('rotas deu certo');