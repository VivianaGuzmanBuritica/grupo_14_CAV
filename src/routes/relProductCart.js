const express = require('express');
const router = express.Router();
const relproductCart = require('../controllers/relProductCart');

router.post('/productCart', productoCarrito.addProduct);


module.exports = router;

