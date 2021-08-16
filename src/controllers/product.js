const product = require('../models/product');
const path = require('path');
const fs = require('fs');

const { all } = require('../models/product');
//const db = require('../database/models');//base de datos

const productController = {
    list: (req,res) => res.render('products/productList',{list: product.all()}),
    productDetail:(req, res) => res.render('products/productDetail',{product:product.one(req.params.id)}), 
    newProduct:(req, res) => res.render('products/newProduct'),
    createProduct: (req,res) => {
        let result = product.new(req.body,req.file)
        return result == true ? res.redirect("/productList") : res.send("Error al cargar la informacion")   
    },
    edit:(req, res,log) => res.render('products/editProduct',{product:product.one(req.params.id)}),
    
    editProduct: function(req,res){
        let result = product.edit(req.body,req.file,req.params.id)
        return result == true ? res.redirect("/productList") : res.send("Error al cargar la informacion") 
    },

    deleteProduct: (req,res) => {
        let result = product.delete(req.params.id);
        return result == true ? res.redirect("/productList") : res.send("Error")
    },

    //CRUD base de datos
    
    //listar:(req,res)=>{
       // db.Product.findAll().then(function(productos){
           //res.render('products/productList',{productos: productos})
    //})

   // }

}

module.exports = productController;