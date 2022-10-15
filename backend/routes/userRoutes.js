const express = require('express');
const router = express.Router();
const planteCtrl = require('../controllers/plante')

router.get('/plantes', planteCtrl.getUserPlantes)

module.exports = router;