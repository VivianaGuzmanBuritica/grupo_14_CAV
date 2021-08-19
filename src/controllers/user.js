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

    //profile: (req, res) => res.render('users/userProfile', 
    //{ user: req.session != undefined && req.session.usuario!= undefined ? req.session.usuario : null}),

    newUser: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            let nuevo = user.userRegister(req.body, req.file);
            console.log(nuevo);
            return nuevo != true ?  res.redirect('ingresar') : res.send('Erro al crear el ususrio !!')
        }
        else { res.render('users/register', {  errors: errors.mapped(),
            old: req.body}) }
            console.log(errors);
        
           // return res.redirect('') 
    },

/*
    userLogin: function (req, res) {
        console.log(req.body);
        let usuario = user.findByEmail('email', req.body.email);
        console.log(usuario)
        if (usuario) {
            req.session.usuario = usuario
        return res.redirect('/usuario/perfil') }
        
        if(req.body.recordame != undefined) {
            res.cookie("recordame", usuario.email, {maxAge: 60000})
        }
        return res.redirect('/usuario/ingresar') 
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


*/

};

module.exports = userController;