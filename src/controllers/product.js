const product = require('../models/product');
const path = require('path');
const fs = require('fs');
const sequelize = require('sequelize');
const { all } = require('../models/product');
const db = require('../database/models');
const { Op } = sequelize;

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
                db.Marca.findAll(
                    {
                    where:{id_brand: '7'}
                })
                    .then(function (marcas) {
                        res.render('products/productDetail', { marcas: marcas, product: product })
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


    createProduct: (req, res) => {
        console.log(req.file)
        let result = product.new(req.body, req.file)
        return result == result ? res.redirect("/") : res.send("Error al cargar la información")
    },

    edit: (req, res) => {
        db.Product.findByPk(req.params.id)
            .then(function (product) {
                db.Marca.findAll()
                    .then(function (marcas) {
                        db.Categoria.findAll()
                            .then(function (categorias) {
                                res.render('products/editProduct', { categorias: categorias, marcas: marcas, product: product })
                            })

                    })
            })

    },

    editProduct: async (req, res) => {
        try {
            const product = await db.Product.findByPk(req.params.id);
            console.log(req.file, req.body)
          
            const updated = await product.update({
                name: req.body.name,
                id_brand: req.body.id_brand,
                description: req.body.description,
                image: req.file.filename,
                id_category: req.body.id_category,
                price: req.body.price
            },
                { where: { id_product: req.params.id } })

            res.redirect('/')
        } catch (error) {
            return res.send(error);
        }
    },

    // editProduct: function (req, res) {
    //     db.Product.update({

    //         name: req.body.name,
    //         id_brand: req.body.id_brand,
    //         description: req.body.description,
    //         image: req.body.image,
    //         id_category: req.body.id_category,
    //         price: req.body.price
    //     },
    //         { where: { id_product: req.params.id } })
    //   res.redirect('/')

    // },

    deleteProduct: (req, res) => {
        db.Product.destroy({
            where: { id_product: req.params.id }
        })
        res.redirect("/")

    },

}

module.exports = productController;