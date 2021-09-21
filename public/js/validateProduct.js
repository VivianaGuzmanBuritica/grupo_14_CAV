// const {body} = require("express-validator");
// const path = require('path');

window.addEventListener(('load'), function () {
    let formulario = document.querySelector("form");
    formulario.addEventListener('submit', function (e) {
   
        let errores = {
            nombre: [],
            descripcion: [],
            imagen: [],
            precio: [],
        }

        //validación Nombre

        let campoNombre = document.querySelector('#name');
        if (campoNombre.value == '') {
            errores.nombre.push('El campo Nombre debe estar completo');
        }
        else if (campoNombre.value.length < 2) {
            errores.nombre.push('El campo Nombre debe contener al menos 2 caracteres');
        }

        //validación Descripción

        let campoDescripcion = document.querySelector('#description');
        if (campoDescripcion.value == '') {
            errores.descripcion.push('El campo Descripción debe estar completo');
        }
        else if (campoDescripcion.value.length < 2) {
            errores.descripcion.push('El campo Descripción debe contener al menos 2 caracteres');
        }

        //validación Imagen

        let campoImagen = document.querySelector('#image');
        // let file = req.file;
        //let acceptedExtensions = ['.jpg', '.png', '.gif'];

        if (campoImagen.value == '') {
            errores.imagen.push('Debe adjuntar una sola imagen en formato .jpg, .png ó .gif');
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
            errores.precio.push('El campo Precio debe estar completo');
        }
        else if (campoPrecio.value == Number) {
            errores.precio.push('Digite solo numeros separando con punto los')
        }

        //Array errores nombre

        if (errores.nombre.length > 0) {
            e.preventDefault();
           

            let ulErrores = document.querySelector('div.erroresNombre ul');
           
            ulErrores.innerHTML = '';

            for (let i = 0; i < errores.nombre.length; i++) {
                ulErrores.innerHTML += '<li>' + errores.nombre + '</li>'
            }
        }


        //Array errores descripcion

        if (errores.descripcion.length > 0) {
            e.preventDefault();
            

            let ulErrores = document.querySelector('div.erroresDescripcion ul');

            ulErrores.innerHTML = '';

            for (let i = 0; i < errores.descripcion.length; i++) {
                ulErrores.innerHTML += '<li>' + errores.descripcion + '</li>'
            }
        }

        //Array errores imagen

        if (errores.imagen.length > 0) {
            e.preventDefault();

            let ulErrores = document.querySelector('div.erroresImagen ul');

            ulErrores.innerHTML = '';

            for (let i = 0; i < errores.imagen.length; i++) {
                ulErrores.innerHTML += '<li>' + errores.imagen + '</li>'
            }
        }

        //Array errores precio

        if (errores.precio.length > 0) {
            e.preventDefault();

            let ulErrores = document.querySelector('div.erroresPrecio ul');

            ulErrores.innerHTML = '';

            for (let i = 0; i < errores.precio.length; i++) {
                ulErrores.innerHTML += '<li>' + errores.precio + '</li>'
            }
        }

    })
})
