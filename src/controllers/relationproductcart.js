const db = require("../models");

const relationProductCartController = {
    aregarProducto:(req, res) => {
        let nuevoProducto = req.body
        let productoAgregado = await db.RelationProductCart.create(nuevoProducto)
        return productoAgregado
    },
    eliminarProducto: (req,res) => {
        let productoAEliminar = req.body
        let carritoModificado = await db.RelationProductCart.destroy(productoAEliminar)
        return carritoModificado

    }

};

module.exports = relationProductCartController; 