const {body} = require("express-validator");

// Validaciones

const validaciones = [
    body("name").notEmpty().withMessage("El nombre es campo obligatorio").bail()
    .isLength({min:2}),
    body("email").notEmpty().withMessage("El email es campo obligatorio").bail()
    .isEmail().withMessage("El email no es válido"),
    body("domicilio").notEmpty().withMessage("El domicilio es campo obligatorio"),
    body("tipo").notEmpty().withMessage("El tipo es campo obligatorio"),
    body("interes").notEmpty().withMessage("El interes es campo obligatorio"),
    //body("fotoPerfil").notEmpty().withMessage("La foto es campo obligatorio"),
    //body("date").notEmpty().withMessage("Nacimiento es campo obligatorio"),
    body("password").notEmpty().withMessage("Contraseña es campo obligatorio").bail()
    .isLength({min:8}).withMessage("La contraseña debe tener 8 caracteres como mínimo"),
    body("confirmPassword").notEmpty().withMessage("Confirmar la contraseña es campo obligatorio").bail()
    .isLength({min:8}).withMessage("La contraseña debe tener 8 caracteres como mínimo")
  ];

  module.exports = validaciones