const db = require("../database/models");

const productCartController = {
    carrito:(req, res) => res.render('products/productCart'),

}

module.exports = productCartController

