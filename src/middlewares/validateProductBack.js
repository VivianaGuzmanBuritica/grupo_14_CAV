const {body} = require("express-validator");
const path = require('path');

const validaciones = [
    body("name").notEmpty().isLength({min:5}).withMessage("El nombre debe tener un mínimo de 5 caracteres"),
    body("description").notEmpty().withMessage("La descripción es campo obligatorio").isLength({min:20}),
    body("image").custom((value, { req }) => {
        let file= req.file;
        let acceptedExtensions = ['.jpg', '.jpeg','.png','.gif' ]

        if(!file) {
            throw new Error('Debe adjuntar una imagen');
        } else {
            let fileExtension = path.extname(file.originalname)
            if(!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones permitidas son' ${acceptedExtensions.join(', ')}`);
        }        
        }
        return true;
    }),
    body("price").notEmpty().withMessage("Debe insertar un valor")  
    
  ];

  module.exports = validaciones 