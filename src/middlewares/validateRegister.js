const {body} = require("express-validator");

// Validaciones

const validaciones = [
    body("name").notEmpty().withMessage("Campo obligatorio").bail()
    .isLength({min:2}),
    body("email").notEmpty().withMessage("Campo obligatorio").bail()
    .isEmail().withMessage("El email no es válido"),
    body("domicilio").notEmpty().withMessage("Campo obligatorio"),
    body("tipo").notEmpty().withMessage("Campo obligatorio"),
    body("interes").notEmpty().withMessage("Campo obligatorio"),
    body("fotoPerfil").notEmpty().withMessage("Campo obligatorio"),
    body("date").notEmpty().withMessage("Campo obligatorio"),
    body("password").notEmpty().withMessage("Campo obligatorio").bail()
    .isLength({min:8}).withMessage("La contraseña debe tener 8 caracteres como mínimo"),
  ];

  module.exports = validaciones