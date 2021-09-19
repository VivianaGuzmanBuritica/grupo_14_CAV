const relproductCart = require('../models/productoCarrito');
const path = require('path');
const fs = require('fs');

const { all } = require('../models/productoCarrito');
const db = require('../database/models');

const relProductCartController = {

/*
    findOneProduct: (req,res) => {
        db.ProductoCarrito.findOne

    },

    addProduct: async (req, res) => {
        let productoAgregado = await db.ProductoCarrito.create(req.body)
        res.redirect('/productCart')        
    },

    
    deleteProduct: (req, res) => {
        let productId = req.body.id;
        return db.ProductoCarrito.destroy({
          where: { productId: id }
        });
    },*/

}

module.exports = relProductCartController;