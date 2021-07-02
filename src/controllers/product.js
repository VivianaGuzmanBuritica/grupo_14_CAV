const product = require('../models/product');
const path = require('path');
const fs = require('fs');
const productModel = require('../models/product');
const { all } = require('../models/product');

const productController = {
    list: (req,res) => res.render('products/productList',{list: product.all()}),// variable list??
    productDetail:(req, res) => res.render('products/productDetail'),
    newProduct:(req, res) => res.render('products/newProduct'),
    createProduct: (req,res) => {
        let result = product.new(req.body,req.file)
        return result == true ? res.redirect("/productList") : res.send("Error al cargar la informacion")   
    },
    edit:(req, res) => res.render('products/editProduct'),
    editProduct: function(req,res){
        let producto= {
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            price: req.body.price,
        }
        console.log(req.body);
        
        res.redirect("login")
    },

    deleteProduct: (req,res) => {
        let result = product.delete(req.params.id);
        return result == true ? res.redirect("/") : res.send("Error")
    }, 

}

module.exports = productController;