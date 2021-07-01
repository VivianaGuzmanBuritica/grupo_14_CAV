const express = require('express');
const productController = require('../controllers/product');
const router = express.Router();
const product = require('../controllers/product');

router.get('/productDetail', product.productDetail);
router.get('/newProduct', product.newProduct);
router.get('/editProduct', product.edit);
router.get('/productList', product.list);

router.post('/newProduct', productController.createProduct);
router.put('/editProduct/:id',product.editProduct);
router.delete('/deleteProduct/:id',product.deleteProduct);


module.exports = router;