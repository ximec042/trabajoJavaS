const path = require("path");
const express = require('express');
const app = express();
const products = require ('./routes/products');

app.use(express.static(path.resolve(__dirname, "../public")));
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.use('/products', products);

app.listen(3000, () => console.log("Server corriendo en el puerto 3000"));
