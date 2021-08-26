const product = require('../models/product');
const path = require('path');
const fs = require('fs');
const sequelize = require('sequelize');
const { all } = require('../models/product');
const db = require('../database/models');
const { Op } = sequelize;

const controller = {
    index:(req, res) => {
        db.Product.findAll()
            .then(function (product) {
                res.render('index', { product: product })
            })
            .catch(function (e) { console.log(e) })
    },
};

module.exports = controller;
// const controller = {
//     index:(req,res) => res.render('index')
// };

// module.exports = controller;