const express = require('express');
const router = express.Router();

const planteCtrl = require('../controllers/plante');

const auth = require('../middleware/auth');

router.get('/', auth, planteCtrl.list);
router.post('/', auth, planteCtrl.create);
router.delete('/:id', auth, planteCtrl.delete);
router.put('/:id', auth, planteCtrl.update);


module.exports = router;