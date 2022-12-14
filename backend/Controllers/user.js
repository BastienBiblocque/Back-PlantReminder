const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {getUserIdWithJwt} = require("../Utils/getJwt");

exports.signup = (req, res, next) => {
    bcrypt.hash(req.query.password,10).then(hash=>{
        const user = new User({
            email:req.query.email,
            firstName:req.query.firstName,
            name:req.query.name,
            password:hash,
        });
        user.save()
            .then(()=>res.status(201).json({message: 'Utilisateur crée !'}))
            .catch(error=>res.status(400).json({error}))
    })
    .catch(error=> res.status(500).json({error}))
};

exports.login = (req, res, next) => {
    User.findOne({email: req.query.email})
        .then(user=>{
            if (!user) {
                return res.status(401).json({ message: 'Paire login/mot de passe incorrecte'});
            }
            bcrypt.compare(req.query.password, user.password)
                .then(valid =>{
                    if (!valid) {
                        return res.status(401).json({ message: 'Paire login/mot de passe incorrecte'});
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            { userId: user._id, email: user.email, name: user.name, firstName: user.firstName, },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h' }
                        )
                    })
                })
                .catch(error => res.status(500).json({ error }))
        })
        .catch(error => res.status(500).json({ error }))
};

exports.update = (req, res, next) => {
    User.updateOne({_id:getUserIdWithJwt(req)}, {...req.query, _id:req.params.id}).then(()=>{
        res.status(200).json({message:'Utilisateur modifié'})
    }).catch(error=> res.status(400).json({error}))
}