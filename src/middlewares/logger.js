const path = require('path');
const fs = require('fs');

const logger = (req, res, next) => {
    console.log(req);
    fs.writeFileSync(path.resolve(__dirname,'../logs/logs.txt'),`La ruta ingresada es ${req.originalUrl}\n`)
    next();
}
module.exports = logger;