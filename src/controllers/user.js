const user = require('../models/user');
const path = require('path');
const fs = require('fs');
const { userRegister } = require('../models/user');


const userController = {
    login: (req, res) => res.render('users/login'),

    register: (req, res) => res.render('users/register'),

    userList:(req, res)=> res.render('users/userList',{ user: user.all()}),

    profile:(req, res)=> res.render('users/profile',{ user: user.one(req.body.mail) }),
    

    newUser:(req,res) => {
        console.log(req.body);
        let nuevo = user.userRegister(req.body,req.file);

       return nuevo == true ? res.redirect('/') : res.send("Error al cargar la informacion") 
    },

    userLogin: function (req, res) {
        console.log(req.body);
        let usuarios = user.findByEmail('email', req.body.email);
        console.log(usuarios)
        //return res.redirect('profile') 
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