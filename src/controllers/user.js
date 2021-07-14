const user = require('../models/user');
const path = require('path');
const fs = require('fs');
const  { validationResult} = require("express-validator");
const { userRegister } = require('../models/user');
const bcryptjs= require('bcryptjs');


const userController = {
    login: (req, res) => res.render('users/login'),

    register: (req, res) => res.render('users/register'),

    userList:(req, res)=> res.render('users/userList',{ user: user.all()}),

    profile:(req, res)=> res.render('users/profile',{ user: user.one(req.body.mail) }),
    

    newUser:(req,res) => {
        let nuevo = user.userRegister(req.body,req.file);
       return nuevo == true ? res.redirect('/') : res.send("Error al cargar la informacion") 
    },

    userRegister: function (req, res) {
        let errors = validationResult(req);
      //  return res.send({errors:errors.array(),body:req.body})
        if(errors.isEmpty()){
            const directory = path.resolve(__dirname,"../data","users.json");
            let usuarios = user.all();
            let register = {
                id: req.body.id ,
                name: req.body.name,
                email: req.body.email,
                domicilio: req.body.domicilio,
                tipo: req.body.tipo,
                interes: req.body.interes,
                fotoPerfil: req.body.fotoPerfil,
                fechaNacimiento: req.body.fechaNacimiento,
                password: bcryptjs.hashSync(req.body.password, 10),
                confirmPassword: req.body.confirmPassword,
            
            };
            usuarios.push(register)
            fs.writeFileSync(directory,JSON.stringify(usuarios,null,2));
            console.log(usuarios);

            res.redirect('ingresar')
            return true;   
        } else {
            res.render('users/register', {errors: errors.array()})
        }
    },
        
    userLogin: function (req, res) {
        console.log(req.body);
        let usuarios = user.findByEmail('email', req.body.email);
        console.log(usuarios)
        //return res.redirect('profile') 
    },
   
    show: (req, res) => res.render("users/edit", { user: user.one(req.params.id) }), //mostrata el detalle del perfil del usuario//
    edit: (req, res) => res.render("users/edit", { user: user.one(req.params.id) }),//mostrar vista perfila editar//
    update: (req, res) => {
        let result = user.edit(req.body, req.file, req.params.id)
        return result == true ? res.redirect("/usuario/perfil") : res.send("Error al cargar la informacion")
    },//guarda el profile editado//
    delete: (req,res) => {
        let result = user.delete(req.params.id);
        return result == true ? res.redirect("/usuario/perfil") : res.send("Error al cargar la informacion") 
    },//borrar usuario
   

   

};

module.exports = userController;