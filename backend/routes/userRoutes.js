const express = require('express');
const router = express.Router();
const planteCtrl = require('../controllers/plante');
const userCtrl = require('../controllers/user')

router.patch('/', userCtrl.update);
router.get('/plantes', planteCtrl.getUserPlantes);

module.exports = router;