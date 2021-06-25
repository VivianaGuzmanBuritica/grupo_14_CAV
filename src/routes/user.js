const express = require('express');
const router = express.Router();
const user = require('../controllers/user');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname,'../../uploads/avatars'))
        },
      filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
      }
    })
     
    const upload = multer({storage})

router.get('/login', user.login);
router.get('/register',user.registro);

router.post('/login',user.userLogin);
router.post('/register',user.userRegister);

module.exports= router;