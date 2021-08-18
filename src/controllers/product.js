const product = require('../models/product');
const path = require('path');
const fs = require('fs');

const { all } = require('../models/product');
const db = require('../database/models');

const productController = {

    list: (req, res) => {
        db.Product.findAll()
            .then(function (product) {
                res.render('products/productList', { product: product })
            })
            .catch(function(e){console.log(e)})
    },

    productDetail: (req, res) => {
        db.Product.findByPk(req.params.id)
            .then(function (product) {
                res.render('products/productDetail', { product: product })
            })
        // res.render('products/productDetail',{product:product.one(req.params.id)})
    },

    newProduct: (req, res) => {
        db.Marca.findAll()
            .then(function (marcas) {
                res.render('products/newProduct', { marcas: marcas })
            })
       
    },

    category: (req, res) =>{
        db.Categoria.findAll()
        .then(function (categorias) {
            res.render('products/newProduct', { categorias: categorias })
        });
    },
    
    createProduct: (req, res) => { //como integrar el modelo  con data, file ?
        let result = product.new(req.body, req.file)
        return result == result ? res.redirect("/") : res.send("Error al cargar la información")
    },
    
    edit: (req, res, log) => {
        db.Product.findByPk(req.params.id)
            .then(function (product) {
                res.render('products/editProduct', { product: product })
            })
        // res.render('products/editProduct',{product:product.one(req.params.id)})
    },

    editProduct: function (req, res) { //como integrar el modelo  con data, file ?
        let result = product.edit(req.body, req.file, req.params.id)
        return result == result ? res.redirect("/productList") : res.send("Error al cargar la informacion")
    },

    deleteProduct: (req, res) => {
        db.Product.destroy({
            where: { id_product: req.params.id_product }
        })
        res.redirect("/")
        // let result = product.delete(req.params.id);
        // return result == result ? res.redirect("/productList") : res.send("Error")
    },

    //CRUD base de datos

    //listar:(req,res)=>{
    // db.Product.findAll().then(function(productos){
    //res.render('products/productList',{productos: productos})
    //})

    // }

}

module.exports = productController;