const {body} = require("express-validator");
const path = require('path');

// Validaciones

const validaciones = [
    body("name").notEmpty().withMessage("El nombre es campo obligatorio").bail()
    .isLength({min:2}),
    body("email").notEmpty().withMessage("El email es campo obligatorio").bail()
    .isEmail().withMessage("El email no es válido"),
    body("domicilio").notEmpty().withMessage("El domicilio es campo obligatorio"),
    body("id_tipo").notEmpty().withMessage("El tipo es campo obligatorio"),
    body("id_rubro").notEmpty().withMessage("El interes es campo obligatorio"),
    //body("fotoPerfil").notEmpty().withMessage("La foto es campo obligatorio"),
    body("fechaNacimiento").notEmpty().withMessage("Nacimiento es campo obligatorio"),
    body("password").notEmpty().withMessage("Contraseña es campo obligatorio").bail()
    .isLength({min:4}).withMessage("La contraseña debe tener 4 caracteres como mínimo"),
    body("confirmPassword").notEmpty().withMessage("Confirmar la contraseña es campo obligatorio").bail()
    .isLength({min:4}).withMessage("La contraseña debe tener 4 caracteres como mínimo"),
/*
    body('confirmPassword').custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Las contraseñas no coinciden');
          }
        }),
        */
    body("fotoPerfil").custom((value, {req})=>{
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif']
        if (!file){
          throw new Error('Tienes que subir una imagen');
        }
        else{
          let fileExtension = path.extname(file.originalname).toLocaleLowerCase();
        
          if(!acceptedExtensions.includes(fileExtension)){
            throw new Error(`Las extensiones permitidas son' ${acceptedExtensions.join(', ')}`);
          }
        }
        return true
    })
  ];

  module.exports = validaciones