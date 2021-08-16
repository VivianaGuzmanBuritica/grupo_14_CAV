

const productCartController = {
    carrito:(req, res) => res.render('products/productCart'),

    //crear carrito
    //calcular total
    //pagar (modificar campo pagado en la bd a true)

 /*   const db = require("../models");

 {
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
 */

};

module.exports = productCartController; 