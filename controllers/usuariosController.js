const usuarios = require('../models/Usuario'); 
const express = require('express');


// GET 

exports.getAllUsers = async(req, res) =>{
    try{
        const users = await usuarios.find();
        return res.json(users)
    } catch(error){
        res.status(500).json({message:error.message});
    }
} 

// GET USER BY ID 

exports.getUserById = async (req, res) =>{
    try{
        const user = await usuarios.findById(req.params.id); 
        return res.json(user);
    }catch(error){
        res.status(500).json({error:error.message});
    }
}


// UPDATE USER BY ID 

exports.updateUserById = async(req, res) =>{
  try{
    atualizarUsuario = await usuarios.findByIdAndUpdate(req.params.id, req.body ,{new:true}); 
    if (!usuarios){
        return res.status(404).json({message: 'Usuário não encontrado'}); 
    }
    res.json(atualizarUsuario);

    } catch (error) {
        res.status(500).json({ error: error.message });
      }
} ;

// DELETE USER BY ID

exports.deleteUserById = async(req, res)=>{
  
    try{
       const usuarioDeletado = await usuarios.findByIdAndDelete(req.params.id);
        return res.json(`usuario ${usuarioDeletado.userName} deletado com sucesso`);
    }catch(error){
        res.status(500).json({ error: error.message });
    
    }
};