const path = require('path');
const fs = require('fs');
const categoryModel = require('./category.js');
const brandModel = require('./brand.js');
const db = require('../database/models');

const model = {
    all: function (req, res) {
        db.Product.findAll()
            .then(function (product) {
                res.render('products/productList', { product: product })
            })
        //     const directory = path.resolve(__dirname,"../data","products.json")
        //     const file = fs.readFileSync(directory,"utf8")
        //     const convert = JSON.parse(file)
        //     return convert
    },
    one:
        function (req, res) {
            db.Product.findByPk(req.params.id)
                .then(function (product) {
                    res.render('products/productDetail', { product: product })
                })
            //  function (id) {
            //     let productos = this.all();
            //     let resultado = productos.find(producto => producto.id == id)
            //     return resultado;
        },
    new: function (data, file) {
        console.log(data)
        db.Product.create({
            //id_product: req.body.id_product
            name: 'pudin',//data.name,
            id_brand: '1',//data.id_brand,
            description: 'vainilla',//data.description,
            image: file.image,
            id_category: '2',//data.id_category,
            price: '100',//data.price
        })
            .then(function () {
                return true;
            })
    },
    // function (data,file) {
    //     const directory = path.resolve(__dirname,"../data","products.json")
    //     let productos = this.all();
    //     let nuevo = {
    //         id: productos.length > 0 ? productos[productos.length -1].id + 1: 1,
    //         name: data.name,
    //         brand: data.brand, 
    //         description: data.description,
    //         image: file.filename,
    //         category:data.category,
    //         price: data.price

    //     }    
    //     productos.push(nuevo)
    //     fs.writeFileSync(directory,JSON.stringify(productos,null,2));
    //     console.log('creado con exito');
    //     return true;


    // },

    edit: function (req, res) {
        db.Product.update({
            //id_product: req.body.id_product
            name: req.body.name,
            id_brand: req.body.id_brand,
            description: req.body.description,
            image: req.body.image,
            id_category: req.body.id_category,
            price: req.body.price
        },
            { where: { id_product: req.params.id_product } })
        res.redirect('products/editProduct' + req.params.id_product)
    },

    // function (data, file, id) {
    //     const directory = path.resolve(__dirname, "../data", "products.json")
    //     let productos = this.all();
    //     productos.map(producto => {
    //         if (producto.id == id) {
    //             producto.name = data.name,
    //                 producto.brand = parseInt(data.brand),
    //                 producto.description = data.description,
    //                 producto.image = file.filename,
    //                 producto.category = data.category,
    //                 producto.price = data.price
    //             return producto
    //         }
    //         return producto
    //     })
    //     fs.writeFileSync(directory, JSON.stringify(productos, null, 2));
    //     return true;
    // },
    delete: function (req, res) {
        db.Product.destroy({
            where: { id_product: req.params.id_product }
        })
        res.redirect("/productList")
    }

    // function (id) {
    //     const directory = path.resolve(__dirname, "../data", "products.json")
    //     let productos = this.all();
    //     let deleted = this.one(id);
    //     fs.unlinkSync(path.resolve(__dirname, "../../public/uploads/products", deleted.image))
    //     // filtarmos el producto que deaseamos eliminar
    //     productos = productos.filter(producto => producto.id != deleted.id)
    //     fs.writeFileSync(directory, JSON.stringify(productos, null, 2));
    //     return true;
    // }

}




module.exports = model