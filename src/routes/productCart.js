const express = require('express');
const router = express.Router();
const productCart = require('../controllers/productCart');

router.get('/productCart', productCart.carrito);


module.exports = router;

