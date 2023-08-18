
const express = require('express');
const router = express.Router();
const controller = require('../controllers/productsControllers');
const logs = require('../middlewares/logger');
const upload = require('../middlewares/storage');
const Product = require('../database/models/Product');

router.get('/listar', logs, controller.listar);
router.get('/detalle/:id', controller.detalle);
router.put('/update/:id', controller.update);
router.post('/crear',upload.single('image'), controller.crear);
router.delete('/:id', async(req,res, next)=> {
    const id = req.params.id
    try {
        const result = await Product.findByIdAndDelete(id)
        res.send(result);

    } catch (error) {
        console.log(error.message);
    }
})
module.exports = router;
