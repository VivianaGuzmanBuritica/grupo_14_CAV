const express = require('express');
const router = express.Router();
const product = require('../controllers/product');
const multer = require('multer');
const path = require('path');
const validaciones = require('../middlewares/validateProductBack')


let dest = multer.diskStorage({
  destination: function (req, file, cb) {
      let extension = path.extname(file.originalname);
      if(extension.indexOf("jpg") > 0){
          cb(null, path.resolve(__dirname,"../../public/uploads","products"))
      }
  },
  filename: function (req, file, cb) {
      console.log(file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
      cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
  }
})
const upload = multer({storage:dest});


router.get('/productDetail/:id', product.productDetail);
router.get('/newProduct', product.newProduct);

router.get('/editProduct', product.edit);
router.get('/editProduct/:id', product.edit);
router.get('/productList', product.list);

router.post('/newProduct', upload.single("image"),validaciones,product.createProduct);
router.put('/editProduct/:id',upload.single("image"),product.editProduct);
router.get('/deleteProduct/:id',product.deleteProduct);



module.exports = router;