const express = require('express');
const router = express.Router();
const productCart = require('../controllers/productCart');

router.get('/productCart', productCart.carrito);
//router.post('/productCart', productCart.agregarProducto);


module.exports = router;

