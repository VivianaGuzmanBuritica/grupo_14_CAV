// const {body} = require("express-validator");
// const path = require('path');

window.addEventListener(('load'), function () {
    let formulario = document.querySelector("form");
    formulario.addEventListener('submit', function (e) {

        e.preventDefault();
        let errores = [];

        //validación Nombre

        let campoNombre = document.querySelector('#name');
        if (campoNombre.value == '') {
            errores.push('El campo de nombre debe estar completo');
        }
        else if (campoNombre.value.length < 2) {
            errores.push('El campo nombre debe contener al menos 2 caracteres');
        }

       
        //validación Descripción

        let campoDescripcion = document.querySelector('#description');
        if (campoDescripcion.value == '') {
            errores.push('El campo de Descripción debe estar completo');
        }
        // else if (campoDescripcion.value.length < 2) {
        //     errores.push('El campo descripción debe contener al menos 2 caracteres');
        // }
        
        //validación Imagen

        let campoImagen = document.querySelector('#image');
       // let file = req.file;
        //let acceptedExtensions = ['.jpg', '.png', '.gif'];

        if (campoImagen.value == '') {
            errores.push('Debe adjuntar al menos una imagen');
        }

        // else {
        //     let fileExtension = path.extname(file.originalname).toLocaleLowerCase();
        
        //     if(!acceptedExtensions.includes(fileExtension)){
        //       errores.push(`Las extensiones permitidas son' ${acceptedExtensions.join(', ')}`);
        //     }
        // }

        //validación Precio

        let campoPrecio = document.querySelector('#price');
        if (campoPrecio.value == '') {
            errores.push('El campo de precio debe estar completo');
        }
        
        //Array errores y mostrar en navegador

        if (errores.length > 0) {
            e.preventDefault();

            let ulErrores = document.querySelector('div.errores ul');
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += '<li>' + errores[i] + '</li>'
            }
        }

    })
})