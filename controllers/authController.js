const User = require("../models/Usuario"); 
const jwt = require('jsonwebtoken'); 
const config = require('../config/jwt'); 



exports.register = async (req, res) => {
    try{
        const {userName, email, password} = req.body; 
        const user = new User({userName, email, password}); 
        await user.save(); 
        res.status(201).json({message: 'Usuario registrado com scesso'}); 
    }catch(error){
        res.status(400).json({error:error.message});
    }
}; 

exports.login = async(req, res) =>{
    try{
        const {userName, email, password} = req.body; 
        const user = await User.findOne({userName});
        
        if(!user || !(await user.comparePassword(password))){
            return res.status(401).json({message: 'Credenciais inválidas'})
        }
        const token = jwt.sign({id:user._id}, config.secret, {expiresIn: '1h'});
        res.json({ token });
    }catch(error){
        res.status(500).json({error:error.message});
    }
}; 