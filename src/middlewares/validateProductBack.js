const {body} = require("express-validator");
const path = require('path');

const validaciones = [
    body("name").notEmpty().withMessage("El nombre es campo obligatorio").isLength({min:2}),
    body("description").notEmpty().withMessage("La descripción es campo obligatorio").isLength({min:10}),
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
    body("price").notEmpty().withMessage("Debe insertar un valor"),

    
    
  ];

  module.exports = validaciones