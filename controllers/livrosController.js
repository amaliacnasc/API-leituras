
const livro = require("../models/Livro"); 

// GET 
exports.getAllLivros = async (req, res) =>{
    try{
        const livros = await livro.find();  // find() retorna todos os livros
        res.json(livros); // sempre retornar um json
    }catch(error){
        res.status(500).json({message:error.message}); // 500 - internal server error 
    }
}; 
// GET 
exports.getLivroByName = async (req,res) =>{
    try{
        const livros = await livro.findOne(req.params.nameLivro); 
        if (!livros) {
            return res.status(404).json({message: 'Livro não encontrado'}); 
        }
        res.json(this.getLivroByName); 
        }catch(error){
            return res.status(500).json({message:error.message});
        }
}; 

// POST
// status 201 = created 
// status 400 = bad request 
exports.createLivro = async(req,res) =>{
    const {nameLivro, pages, author, description, date, photo} = req.body; 
    const newLivro = new livro({nameLivro, pages, author, description, date, photo}); 
    try{
        const saveLivro = await newLivro.save(); // pega os valores do req e salva no bd 
        res.status(201).json('Livro salvo');
    }catch(error){
        res.status(400).json({message: error.message});
    }
};

// PUT
exports.updateLivro = async(req,res) =>{
    try{
        const { nameLivro } = req.params;
        const updateLivro = await livro.findOneAndUpdate({ name: nameLivro }, req.body, {new:true});
        res.json(updateLivro); 
    } catch(error){
        res.status(400).json({message:error.message}); 
    }
  
}; 

// DELETE 
exports.deleteLivro = async(req,res) =>{
    try{
        const deleteLivro = await livro.deleteOne({ name: nameLivro }); ; 
        res.json({message: 'Livro excluído'});
    }catch(error){
        res.status(500).json({message:error.message});
    }
};

console.log('controller deu certo');