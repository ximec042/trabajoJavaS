
const Product = require('../database/models/Product');



const controllers = {
    crear: async (req, res) => {
    
      
        try{
            let product = {
                name: req.body.name,
                price: req.body.price,
                discount: req.body.discount,
                description: req.body.description,
                category:  req.body.category,
                image:  req.body.image,
                colors:['azul','blanco','negro']
            }
        
        const productDatabase = await Product.create(product);
        res.status(201).json(productDatabase);
    

        } catch(error) {
            console.log(error);
            if (error.errors.name){
                return res.status(400).json({message: 'El campo name es requerido'})
            }
            res.status(500).json({message:'Internal server error'})
          
        }

        // res.status(201).json(product);
    },
    update: async (req, res) => {
        const product = await Product.findByIdAndUpdate(req.params.id, req.boy);
        return res.status(200).json(product);

    },

    listar: async (req, res) => {
        const products = await Product.find({})
        res.status(200).json(products); 
    },
    detalle: async (req, res) => {
        const product = await Product.findById({_id: req.params.id});
        res.json(product );
    },

    delete: async (req, res) => {
        const product = await Product.deleteOne({_id: req.params.id});
        res.json(product ); 
    },
}

module.exports = controllers;
