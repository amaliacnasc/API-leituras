const http = require ("http"); 
const express = require ("express"); 
const mongoose = require("mongoose"); 
const cors = require('cors'); 
const connectDB = require('./database'); 
const bodyParser = require('body-parser'); 
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

const livrosRoute = require("../backend/routes/livrosRoute"); 
app.use('/api/leituras', livrosRoute); 

// PORTA
const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 

console.log('app js deu certo'); 