const mongoose = require('mongoose');

const planteSchema = mongoose.Schema({
    id_user:{ type:String, required:true},
    nom:{ type:String, required:true},
    type:{ type:String, required:true},
    photo:{ type:String, required:true},
    date_add:{ type:Date, required:true},
    date_delete:{ type:Date, required:false},
});

module.exports = mongoose.model('Plante', planteSchema);