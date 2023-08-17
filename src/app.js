const path = require("path");
const express = require('express');
const app = express();
const products = require ('./routes/products');
const connectToDb = require('./database/connect');
const cors = require('cors');
const usersRouters = require('./routes/users');

connectToDb();

app.use(cors({
    origin: '*'
}));

app.use(express.static(path.resolve(__dirname, "../public")));
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.use('/products', products);
app.use(usersRouters)



app.listen(3000, () => console.log("Server corriendo en el puerto 3000"));

