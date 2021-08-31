const express = require('express');
const router = express.Router();
const user = require('../controllers/user');
const multer = require('multer');
const path = require('path');
const validaciones = require('../middlewares/validateRegister')


    let destino = multer.diskStorage({
      destination: function (req, file, cb) {
          let extension = path.extname(file.originalname);
          if(extension  ===  "PNG"|| "jpeg"||"jpg"||"JPG"){
              cb(null, path.resolve(__dirname,'../../public/uploads/avatars'))
          }else{
            console.log("error al cargar la imagen")
          }
      },
      filename: function (req, file, cb) {
          cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname).toLocaleLowerCase())
      }
    })
    const upload = multer({storage:destino});

 //RUTAS

router.get('/ingresar',user.login);
router.post('/ingresar', [upload.any()],user.userLogin);

router.get('/registro',user.register);
router.post('/registro',[upload.single('fotoPerfil'),validaciones],user.newUser); 


router.get('/lista', user.userList);
//router.get('/perfil', user.profile);

router.get("/:id",user.userDetail); //mostrar vista profile REVISAR "/profile/:id"
router.get("/edit/:id",user.update); //mostra vista editar profile
router.put("/update/:id",[upload.single("fotoPerfil")],user.update); ///guarda la version editada
router.get("/delete/:id",user.delete);

module.exports= router;