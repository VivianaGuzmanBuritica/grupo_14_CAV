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
            .catch(function (e) { console.log(e) })
    },

    productDetail: (req, res) => {
        db.Product.findByPk(req.params.id)
            .then(function (product) {
                db.Marca.findAll()
                    .then(function (marcas) {
                res.render('products/productDetail', {marcas:marcas, product: product })
            })
        })

    },

    newProduct: (req, res) => {
        db.Marca.findAll()
            .then(function (marcas) {
                db.Categoria.findAll()
                    .then(function (categorias) {
                        res.render('products/newProduct', { categorias: categorias, marcas: marcas })
                    });

            })

    },

    category: (req, res) => {
        db.Categoria.findAll()
            .then(function (categorias) {
                res.render('products/newProduct', { categorias: categorias })
            });
    },

    createProduct: (req, res) => {
        let result = product.new(req.body, req.file)
        return result == result ? res.redirect("/") : res.send("Error al cargar la información")
    },

    edit: (req, res) => {
        db.Product.findByPk(req.params.id)
            .then(function (product) {
                res.render('products/editProduct', { product: product })
            })

    },

    editProduct: function (req, res) {
        db.Product.update({
            //id_product: req.body.id_product
            name: req.body.name,
            id_brand: req.body.id_brand,
            description: req.body.description,
            image: req.body.image,
            id_category: req.body.id_category,
            price: req.body.price
        },
            { where: { id_product: req.params.id } })
       res.redirect('/' + req.params.id)
        // let result = product.edit(req.body, req.file, req.params.id)
        // return result == result ? res.redirect("/productList") : res.send("Error al cargar la informacion")
    },

    deleteProduct: (req, res) => {
        db.Product.destroy({
            where: { id_product: req.params.id_product }
        })
        res.redirect("/")

    },

}

module.exports = productController;