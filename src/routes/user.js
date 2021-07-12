const express = require('express');
const router = express.Router();
const user = require('../controllers/user');
const multer = require('multer');
const path = require('path');


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

    


router.get('/ingresar', user.login);
router.post('/ingresar', [upload.any()],user.userLogin);

router.get('/registro',user.register);
router.post('/registro',[upload.single('fotoPerfil')],user.newUser); 


router.get('/perfil', user.userList);
router.post('/perfil', user.profile);

router.get("/:id",user.show); //mostrar vista profile REVISAR "/profile/:id"
router.get("/edit/:id",user.edit); //mostra vista editar profile
router.put("/update/:id",[upload.single("fotoPerfil")],user.update); ///guarda la version editada
router.get("/delete/:id",user.delete);

module.exports= router;