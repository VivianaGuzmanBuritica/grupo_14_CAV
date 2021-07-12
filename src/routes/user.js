const express = require('express');
const router = express.Router();
const user = require('../controllers/user');
const multer = require('multer');
const path = require('path');
const {body} = require("express-validator");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/avatars')
        },
      filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname));
      }
    })
     
    const upload = multer({storage})

// Validaciones

const validaciones = [
  body("name").notEmpty().withMessage("Campo obligatorio"),
  body("email").notEmpty().withMessage("Campo obligatorio").bail()
  .isEmail().withMessage("El email no es válido"),
  body("domicilio").notEmpty().withMessage("Campo obligatorio"),
  body("date").notEmpty().withMessage("Campo obligatorio"),
  body("password").notEmpty().withMessage("Campo obligatorio").bail()
  .isLength({min:8}).withMessage("La contraseña debe tener 8 caracteres como mínimo"),
];

router.get('/ingresar', user.login);
router.post('/ingresar',[upload.any()],user.userLogin);

router.get('/registro',user.register);
router.post('/registro',validaciones,[upload.any()],user.userRegister); 

router.get('/perfil', user.profile);
router.post('/perfil', user.profile);

router.get("/:id",user.show); //mostrar vista profile REVISAR "/profile/:id"
router.get("/edit/:id",user.edit); //mostra vista editar profile
router.put("/update/:id",[upload.single("image")],user.update); ///guarda la version editada
router.delete("/delete/:id",user.delete);

module.exports= router;