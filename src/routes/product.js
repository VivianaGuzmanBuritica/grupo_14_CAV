const express = require('express');
const router = express.Router();
const product = require('../controllers/product');

router.get('/productDetail', product.productDetail);

module.exports = router;