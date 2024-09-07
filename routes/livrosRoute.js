const express = require("express"); 
const router = express.Router(); // importando 'modulo' de rotas do express
const livrosController = require("../controllers/livrosController"); 

router.get('/', livrosController.getAllLivros); 
//router.get('/', livrosController.getLivroByName);  // Sem o ':nameLivro'
router.post('/', livrosController.createLivro); 
router.put('/:id', livrosController.updateLivro);
router.delete('/:id', livrosController.deleteLivro);

module.exports = router; 

console.log('rotas deu certo');