const express = require('express');
const productController = require('../controllers/product');
const router = express.Router();
const product = require('../controllers/product');

router.get('/productDetail', product.productDetail);
router.get('/newProduct', product.newProduct);

router.post('/newProduct', product.createProduct);


module.exports = router;