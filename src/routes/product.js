const express = require('express');
const productController = require('../controllers/product');
const router = express.Router();
const product = require('../controllers/product');
const multer = require('multer');
const path = require('path');

let dest = multer.diskStorage({
  destination: function (req, file, cb) {
      let extension = path.extname(file.originalname);
      if(extension.indexOf("jpg") > 0){
          cb(null, path.resolve(__dirname,"../../public/uploads","products"))
      }
  },
  filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
  }
})
const upload = multer({storage:dest});


router.get('/productDetail', product.productDetail);
router.get('/newProduct', product.newProduct);
router.get('/editProduct', product.edit);
router.get('/productList', product.list);

router.post('/newProduct', upload.single("image"),productController.createProduct);
router.put('/editProduct/:id',product.editProduct);
router.delete('/deleteProduct/:id',product.deleteProduct);


module.exports = router;