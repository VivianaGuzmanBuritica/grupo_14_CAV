const express = require('express');
const router = express.Router();
const main = require('../controllers/main');


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
router.get('/',main.index);


module.exports = router;