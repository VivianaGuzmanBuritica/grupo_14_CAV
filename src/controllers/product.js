const product = require("../models/product");
const path = require("path");
const fs = require("fs");
const { validationResult } = require("express-validator");
const sequelize = require("sequelize");
const { all } = require("../models/product");
const db = require("../database/models");
const { Op } = sequelize;

const productController = {
  list: (req, res) => {
    db.Product.findAll()
      .then(function (product) {
        res.render("products/productList", { product: product });
      })
      .catch(function (e) {
        console.log(e);
      });
  },

  productDetail: async (req, res) => {
    try {
      db.Product.findByPk(req.params.id).then(function (product) {
        db.Marca.findOne({
          where: { id_brand: 1 },
        }).then(function (marca) {
          res.render("products/productDetail", {
            marca: marca,
            product: product,
          });
        });
      });
    } catch (error) {
      return res.send(error);
    }
  },

  newProduct: (req, res) => {
    db.Marca.findAll().then(function (marcas) {
      db.Categoria.findAll().then(function (categorias) {
        res.render("products/newProduct", {
          categorias: categorias,
          marcas: marcas,
        });
      });
    });
  },

  createProduct: async (req, res) => {
    let marcas = await db.Marca.findAll();
    let categorias = await db.Categoria.findAll();
    let errors = validationResult(req);
    //res.send(errors)
    if (errors.isEmpty()) {
      let result = product.new(req.body, req.file);
      return result == result
        ? res.redirect("/")
        : res.send("Error al cargar la información");
    } else {
      console.log(errors.mapped());

      res.render("products/newProduct", {
        errors: errors.mapped(),
        old: req.body,
        marcas,
        categorias,
      });
    }
  },

  edit: (req, res) => {
    db.Product.findByPk(req.params.id).then(function (product) {
      db.Marca.findAll().then(function (marcas) {
        db.Categoria.findAll().then(function (categorias) {
          res.render("products/editProduct", {
            categorias: categorias,
            marcas: marcas,
            product: product,
          });
        });
      });
    });
  },

  editProduct: async (req, res) => {
    try {
      const product = await db.Product.findByPk(req.params.id);
      console.log(req.file, req.body);

      const updated = await product.update(
        {
          name: req.body.name,
          id_brand: req.body.id_brand,
          description: req.body.description,
          image: req.file.filename,
          id_category: req.body.id_category,
          price: req.body.price,
        },
        { where: { id_product: req.params.id } }
      );

      res.redirect("/");
    } catch (error) {
      return res.send(error);
    }
  },

  deleteProduct: (req, res) => {
    db.Product.destroy({
      where: { id_product: req.params.id },
    });
    res.redirect("/");
  },

  // api product

  apiProduct: (req, res) => {
    db.Product.findAll()
      .then(products => {
       return res.json(
            {
              meta:{
                  status: 200, 
                  total: products.length,//total de productos
                  url: 'api/products'
              },
              data: products 
            }
            );
      })
      .catch(function (e) {
        console.log(e);
      });
  },

  apiDetail: (req, res) => {
    db.Product.findByPk(req.params.id_product)
      .then(product => {
       return res.json(
            {
              meta:{
                  status: 200,            
                  url: 'api/productDetail/:id'
              },
              data: product  
            }
            );
      })
      .catch(function (e) {
        console.log(e);
      });
  },
};

module.exports = productController;
