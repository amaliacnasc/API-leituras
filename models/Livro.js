
const mongoose = require("mongoose"); 

const livroSchema = new mongoose.Schema({

    nameLivro:{
        type:String, 
        required:true
    }, 
    pages:{
        type:Number, 
        required:true,
    },
    author:{
        type:String, 
        required:true
    },
    description:{
        type:String, 
        required:true
    }, 
    date:{
        type:Date, 
        required:true
    }, 
    photo:{
        type:String, 
        required:false
    }, 
});

module.exports = mongoose.model('Livro', livroSchema);

console.log('livro.js deu certo');