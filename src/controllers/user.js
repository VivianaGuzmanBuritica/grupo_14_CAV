const user = require('../models/user');
const path = require('path');
const fs = require('fs');


const userController = {
    login: (req, res) => res.render('users/login'),

    register: (req, res) => res.render('users/register'),

    profile:(req, res)=> res.render('users/profile'),
    
    userLogin: function (req, res) {
      let usuarios = user.findByEmail('email', req.body.email);
    
    return res.redirect('perfil') 
    },

    userRegister: function (req, res) {
        const directory = path.resolve(__dirname,"../data","users.json");
        let usuarios = user.all();
         let register = {
            name: req.body.name,
            email: req.body.email,
            domicilio: req.body.domicilio,
            tipo: req.body.tipo,
            interes: req.body.interes,
            fotoPerfil: req.body.fotoPerfil,
            fechaNacimiento: req.body.fechaNacimiento,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword,
            
        };
        usuarios.push(register)
        fs.writeFileSync(directory,JSON.stringify(usuarios,null,2));
        console.log(usuarios);

        res.redirect('ingresar')
        return true;   
      
    },
 
    show: (req, res) => res.render("users/profile", { user: user.one(req.params.id) }), //mostrata el detalle del perfil del usuario//
    edit: (req, res) => res.render("users/edit", { user: user.one(req.params.id) }),//mostrar vista perfila editar//
    update: (req, res) => {
        let result = user.edit(req.body, req.file, req.params.id)
        return result == true ? res.redirect("/") : res.send("Error al cargar la informacion")
    },//guarda el profile editado//
    delete: (req,res) => {
        let result = user.delete(req.params.id);
        return result == true ? res.redirect("/") : res.send("Error al cargar la informacion") 
    },//borrar usuario
   

   

};

module.exports = userController;