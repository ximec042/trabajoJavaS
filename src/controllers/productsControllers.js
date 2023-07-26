const path = require('path');
const fs = require('fs');

const ruta = path.resolve(__dirname, '../data/products.json');
const jsonProducts = fs.readFileSync(ruta, {encoding: 'utf-8'});
let products = JSON.parse(jsonProducts);
console.log(products);




const controllers = {
    crear: (req, res) => {
        let product = {};

        product.id = products.length + 1;
        product.name = req.body.name;
        product.price = req.body.price;
        product.discount = req.body.discount;
        product.category = req.body.category;

        products.push(product);

        let productsJson = JSON.stringify(products, null, 4);
        fs.writeFileSync (ruta, productsJson, {encoding: 'utf-8'});
        console.log(productsJson);

        
        res.status(201).json(product);
    },
    listar: (req, res) => {
        res.json(products); 
    },
    detalle: (req, res) => {
        res.json('Detalle del producto');
    },
}

module.exports = controllers;
