
const Livro = require("../models/Livro");
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
/*
exports.getLivroByName = async (req,res) =>{
    try{
       const livro = await Livro.findOne({nameLivro:req.params.nameLivro})
        res.json(livro)
        }catch(error){
            return res.status(500).json({message:error.message});
        }
}; 
*/


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

exports.updateLivro = async (req, res) => {
    try {
      const livroID = req.params.id;  // definindo que o id vai ser recebido como parametro
      const { nameLivro } = req.body; // recebendo novo nome do livro 
      
      const livroAtualizado = await livro.findByIdAndUpdate(
        livroID, 
        { nameLivro }, 
        { new: true } // retornando o novo valor
      );
      
      if (!livroAtualizado) {
        return res.status(404).json({ message: 'Livro não encontrado' });
      }
      
      res.json({ message: 'Livro atualizado', livro: livroAtualizado });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
// DELETE 
exports.deleteLivro = async(req,res) =>{
    try{
        const livroID = req.params.id; 
        const livroDeletado = await livro.findByIdAndDelete(livroID); 
        res.status(200).json({message:`Livro ${livroDeletado} excluído`});
    }catch(error){
        res.status(500).json({message:error.message});
    }
};

console.log('controller deu certo');