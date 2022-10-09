const express = require('express')
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://bababibi:Dj61ZeBXIsjjKhgc@cluster0.tvpraqv.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(()=> console.log("Connexion réussie à mongo"))
    .catch((e)=> console.log(e, 'Connexion failed à mongo'));

const planteRoutes = require('./routes/planteRoutes');


app.use('/api/v1/plante', planteRoutes);


module.exports = app;