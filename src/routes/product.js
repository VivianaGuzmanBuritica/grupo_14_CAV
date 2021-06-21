const express = require('express');
const productController = require('../controllers/product');
const router = express.Router();
const product = require('../controllers/product');

router.get('/productDetail', product.productDetail);
router.get('/newProduct', product.newProduct);

router.post('/newProduct', productController.createProduct);


module.exports = router;