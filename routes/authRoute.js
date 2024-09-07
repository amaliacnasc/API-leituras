const express = require('express'); 
const {register, login} = require('../controllers/authController'); 

const router = express.Router(); // importando 'modulo' de rotas do express

router.post('/register', register); 
router.post('/login', login);

module.exports = router;