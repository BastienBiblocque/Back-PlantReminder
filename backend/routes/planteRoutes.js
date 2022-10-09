const express = require('express');
const router = express.Router();
const planteCtrl = require('../controllers/plante')


router.get('/', planteCtrl.list)

module.exports = router;