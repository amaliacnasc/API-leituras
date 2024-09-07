const http = require ("http"); 
const express = require ("express"); 
const mongoose = require("mongoose"); 
const cors = require('cors'); 
const connectDB = require('./database'); 
const bodyParser = require('body-parser'); 
const helmet = require('helmet');
const morgan = require('morgan');
const bcrypt = require('bcrypt');

require('dotenv').config(); 

const app = express(); 

// middleware
app.use(cors()); 
app.use(bodyParser.json({limit:'50mb'})); 
app.use(bodyParser.urlencoded({limit:'50mb', extended:true})); 
app.use(express.static('public')); 


// conectando mongo 
connectDB(); 
// rotas

// Middleware de segurança
app.use(helmet());

// Middleware para habilitar CORS
app.use(cors());

// Middleware para log de requisições
app.use(morgan('dev'));

// Middleware para parsing de JSON
app.use(express.json());

// Middleware para parsing de dados de formulários
app.use(express.urlencoded({ extended: true }));

const livrosRoute = require("../backend/routes/livrosRoute"); 
const usuariosRoute = require("../backend/routes/usuariosRoute");
const authRoute = require('../backend/routes/authRoute');
app.use('/api/leituras', livrosRoute); 
app.use('/api/usuarios', usuariosRoute );
app.use('/api/auth', authRoute);

// PORTA
const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 

console.log('app js deu certo'); 