const db = require("../database/models");

const productCartController = {
    carrito:(req, res) => res.render('products/productCart'),
    agregarProducto: async function (req, res) {
        let nuevoProducto = req.body
        let productoAgregado = await db.RelationProductCart.create(nuevoProducto)
        return productoAgregado
    },

    //crear carrito
    //calcular total
    //pagar (modificar campo pagado en la bd a true)

 /*   

 {
  
    },
    eliminarProducto: (req,res) => {
        let productoAEliminar = req.body
        let carritoModificado = await db.RelationProductCart.destroy(productoAEliminar)
        return carritoModificado

    }

};

*/ 

}

module.exports = productCartController

