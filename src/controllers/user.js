const user = require('../models/user');
const path = require('path');
const fs = require('fs');
const { validationResult } = require("express-validator");
//const { userRegister } = require('../models/user');
const bcrypt = require('bcryptjs');


const userController = {
    login: (req, res) => res.render('users/login'),

    register: (req, res) => res.render('users/register'),

    userList: (req, res) => res.render('users/userList', { user: user.all() }),

    profile: (req, res) => res.render('users/profile', { user: user.one(req.body.mail) }),

    newUser: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            let nuevo = user.userRegister(req.body, req.file);
            console.log('metodo new user' + nuevo);
            return nuevo == true ? res.redirect('ingresar') : res.send("Error al cargar la informacion")
        }
        else { res.render('users/register', {  errors: errors.mapped(),
            old: req.body}) }
        
           // return res.redirect('') 
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
    delete: (req, res) => {
        let result = user.delete(req.params.id);
        return result == true ? res.redirect("/usuario/perfil") : res.send("Error al cargar la informacion")
    },//borrar usuario




};

module.exports = userController;