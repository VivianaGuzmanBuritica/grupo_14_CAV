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

router.get('/ingresar', user.login);
router.get('/registro',user.register);

router.post('/perfil',user.userLogin);
router.post('/registro',[upload.any()],user.userRegister); 

router.get("/create",user.create)//crear usuario
router.post("/save",[upload.any()],user.save)//guardar usuario creado revisar ANY
router.get("/:id",user.show); //mostrar vista profile REVISAR "/profile/:id"
router.get("/edit/:id",user.edit); //mostra vista editar profile
router.put("/update/:id",[upload.single("image")],user.update); ///guarda la version editada
router.delete("/delete/:id",user.delete);

module.exports= router;