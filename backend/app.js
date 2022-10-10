const express = require('express')
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb+srv://bababibi:Dj61ZeBXIsjjKhgc@cluster0.tvpraqv.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(()=> console.log("Connexion réussie à mongo"))
    .catch((e)=> console.log(e, 'Connexion failed à mongo'));

const planteRoutes = require('./routes/planteRoutes');
const userRoutes = require('./routes/userRoutes');

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use('/api/v1/plante', planteRoutes);
app.use('/api/v1/auth', userRoutes);


module.exports = app;