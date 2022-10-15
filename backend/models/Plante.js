const mongoose = require('mongoose');

const planteSchema = mongoose.Schema({
    idUser:{ type:String, required:true},
    name:{ type:String, required:true},
    description:{ type:String, required:true},
    logo:{ type:String, required:true},
    wateringDelay:{ type:String, required:true},
    dateAdd:{ type:Date, required:true},
    nextWatering:{ type:Date, required:true},
    dateDelete:{ type:Date, required:false},
});

module.exports = mongoose.model('Plante', planteSchema);