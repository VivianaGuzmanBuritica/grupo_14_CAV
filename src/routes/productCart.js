const express = require('express');
const router = express.Router();
const productCart = require('../controllers/productCart');


router.get('/productCart', productCart.carrito);
router.post('/productCart/add', productCart.create);
//router.post('/update/:id', productCart.update);


module.exports = router;

