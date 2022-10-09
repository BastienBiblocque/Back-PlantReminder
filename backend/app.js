const express = require('express')
const app = express();
const mongoose = require('mongoose');

const Plante = require('./models/plante');

mongoose.connect('mongodb+srv://bababibi:Dj61ZeBXIsjjKhgc@cluster0.tvpraqv.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(()=> console.log("Connexion réussie à mongo"))
    .catch((e)=> console.log(e, 'Connexion failed à mongo'));

app.post('/api/plante', (req, res, next) => {
    const dataToSend = {
        id_user:1,
        nom:'Orchi',
        type:'Orchidées',
        photo:'image',
        date_add:new Date(),
    };
    Plante.create(dataToSend).then((tweets)=>{
        res.status(200).json(tweets)
    }).catch(error=> res.status(400).json({error}))
});

module.exports = app;