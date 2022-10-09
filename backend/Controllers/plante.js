const Plante = require('../models/Plante')

exports.list = (req,res) =>{
    Plante.find().then((plantes)=>{
        res.status(200).json(plantes)
    }).catch(error=> res.status(400).json({error}))
}