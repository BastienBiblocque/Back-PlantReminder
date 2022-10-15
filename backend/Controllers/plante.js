const Plante = require('../models/Plante')
const jwt = require("jsonwebtoken");
const {getUserIdWithJwt} = require("../Utils/getJwt");

exports.list = (req,res) =>{
    Plante.find().then((plantes)=>{
        res.status(200).json(plantes)
    }).catch(error=> res.status(400).json({error}))
}

exports.create = (req,res) =>{
    const plante = new Plante({
        ...req.query
    })
    plante.dateAdd = new Date();
    plante.nextWatering = new Date();
    plante.idUser = getUserIdWithJwt(req);
    plante.save().then(()=>{
        res.status(201).json({message:'Plante enregistrée'})
    }).catch(error=> res.status(400).json({error}))
}

exports.delete = (req,res) =>{
    Plante.deleteOne({_id:req.params.id}).then(()=>{
        res.status(200).json({message:'Plante supprimée'})
    }).catch(error=> res.status(400).json({error}))
}

exports.update = (req,res) =>{
    Plante.updateOne({_id:req.params.id}, {...req.body, _id:req.params.id}).then(()=>{
        res.status(200).json({message:'Plante modifiée'})
    }).catch(error=> res.status(400).json({error}))
}

exports.getUserPlantes = (req,res) =>{
    Plante.find({userId:req.params.id}).then((plantes)=>{
        res.status(200).json(plantes)
    }).catch(error=> res.status(400).json({error}))
}