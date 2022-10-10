const express = require('express');
const router = express.Router();

const planteCtrl = require('../controllers/plante');

const auth = require('../middleware/auth');

router.get('/', auth, planteCtrl.list);

module.exports = router;