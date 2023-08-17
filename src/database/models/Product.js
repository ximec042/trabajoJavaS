
const mongoose = require("mongoose");


 const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    price:  {
        type: Number,
        required: true
    },

    discount: Number,
    description:  {
        type: String,
        required: true
    },
    image: String,
    colors: [String]

});

const Product = mongoose.model ('Product', productSchema);

module.exports = Product;