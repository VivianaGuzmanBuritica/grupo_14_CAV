const sequelize = require('sequelize');
const db = require("../database/models");

const productCartController = {
    /*carrito: (req, res) => {
        res.render('products/productCart')
    },*/
    carrito: async (req,res) => {
        try {
            const products = await db.Product.findAll();
            console.log("consulto producto ok")
            const user = await db.User.findByPk(1) 
            console.log("consulto user ok")
            const pedido = await db.Pedido.findAll({include:['producto', 'usuario'], where:{id_usuario:1}});
            console.log("consulto pedido ok")
            return res.send({
                user:user,
                products: products,
                pedido: pedido
            })
            res.render('productCart',{
                title: 'Carrito',
                user: user,
                products: products,
                pedido: pedido
            });
         } catch (error) {
             console.log(error)
             res.send(error)
         }

    },
    create: async (req,res) => {
        console.log("----------")
        try {
            const product = await db.Product.findByPk(req.body.product)
            console.log("encontro producto")
            const pedido = await db.Pedido.create({
                id_usuario: req.body.user,
                id_producto: product.id_product,
                cantidad: req.body.cantidad,
                precio_actual: product.price,
                fecha: Date.now()
            })
            console.log("creo pedido")
        } catch (error) {
            console.log("error")
            res.send(error)
        }

    },
    update: async (req,res) => {
        res.send({data:req.body,id:req.params.id})
    }


}

module.exports = productCartController;
