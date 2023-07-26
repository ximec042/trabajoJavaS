const path = require('path');
const express = require('express');
const multer = require('multer');
const router = express.Router();
const controller = require('../controllers/productsControllers');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,path.resolve(__dirname, '../../public/images') );
    },
    filename: (req, file, cb) => {
        cb(null, 'image.jpg' )
    }
});

const upload = multer({storage: storage});

router.get('/listar', controller.listar);
router.get('/detalle', controller.detalle);
router.post('/crear',upload.single('image'), controller.crear);

module.exports = router;
