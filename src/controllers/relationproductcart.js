const db = require("../models");

const relationProductCartController = {
    aregarProducto:(req, res) => {
        let nuevoProducto = req.body
        let productoAgregado = await db.RelationProductCart.create(nuevoProducto)
        return productoAgregado
    },

};

module.exports = relationProductCartController; 