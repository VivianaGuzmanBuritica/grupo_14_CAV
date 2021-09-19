const express = require('express');
const router = express.Router();
const user = require('../controllers/user');
const multer = require('multer');
const path = require('path');
const validaciones = require('../middlewares/validateRegister');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');



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

router.get('/ingresar',guestMiddleware, user.login);
router.post('/ingresar', [upload.any()],user.userLogin);

router.get('/registro',guestMiddleware, user.register);
router.post('/registro',[upload.single('fotoPerfil'),validaciones],user.newUser); 


router.get('/lista', user.userList);


router.get("/detail/:id", authMiddleware,user.userDetail); //mostrar vista profile REVISAR "/profile/:id"
router.get("/edit/:id",user.update); //mostra vista editar profile
router.put("/update/:id",[upload.single("fotoPerfil")],user.update); ///guarda la version editada
router.get("/delete/:id",user.delete);
router.get("/logout", user.logOut);  // logout

module.exports= router;