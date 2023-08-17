
const express = require('express');
const router = express.Router();
const controller = require('../controllers/productsControllers');
const logs = require('../middlewares/logger');
const upload = require('../middlewares/storage');

router.get('/listar', logs, controller.listar);
router.get('/detalle/:id', controller.detalle);
router.put('/update/:id', controller.update);
router.post('/crear',upload.single('image'), controller.crear);

module.exports = router;
