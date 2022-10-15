const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user')
const planteCtrl = require('../controllers/plante')


router.post('/signup', userCtrl.signup)
router.post('/login', userCtrl.login)
router.get('/:id/plantes', planteCtrl.getUserPlantes)

module.exports = router;