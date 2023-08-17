const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,path.resolve(__dirname, '../../public/images') );
    },
    filename: (req, file, cb) => {
        cb(null, 'image.jpg' )
    }
});

const upload = multer({storage: storage});

module.exports = upload;