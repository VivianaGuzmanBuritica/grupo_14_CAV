const express = require('express');
const router = express.Router();
const product = require('../controllers/product');

router.get('/productDetail', product.productDetail);
router.get('/newProduct', product.newProduct);

module.exports = router;