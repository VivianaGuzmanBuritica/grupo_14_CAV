window.addEventListener(('load'), function () {
    let formulario = document.querySelector("form");
    formulario.addEventListener('submit', function (e) {

        e.preventDefault();
        let errores = [];
        let campoNombre = document.querySelector('#name');
        console.log(campoNombre);

        if (campoNombre.value == '') {
            errores.push('el campo de nombre debe estar completo');
        }
        // else if (campoNombre > 3) {
        //     errores.push('el campo nombre contener al menos 3 caracteres');
        // }
        if (errores.length > 0) {
            e.preventDefault();

            let ulErrores = document.querySelector('div .errores ul');
            for (i = 0; errores.length; i++) {
                ulErrores.innerHTML += '<li>' + errores[i] + '</li>'
            }
        }

    })
})