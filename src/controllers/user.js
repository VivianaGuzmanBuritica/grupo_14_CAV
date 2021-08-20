const user = require('../models/user');
const path = require('path');
const fs = require('fs');
const { validationResult } = require("express-validator");
//const { userRegister } = require('../models/user');
const bcrypt = require('bcryptjs');
const { todos } = require('../models/user');
const db = require('../database/models');

const Users = db.User;
const Rubro = db.Rubro;
const Tipo = db.Tipo;


const userController = {
    login: (req, res) => res.render('users/login'),

    register: (req, res) => {
             Rubro.findAll()
                .then(function (rubro) {
                    Tipo.findAll()
                    .then(function(tipo){
            res.render('users/register', {rubro:rubro, tipo:tipo })
        })
    })
},

    userList: (req, res) => {
            Users.findAll()
            .then(function (user) {
                res.render('users/userList', { user: user })
            })
            .catch(function (e) { console.log(e) })

        },

    userDetail: (req, res) => {
            db.User.findByPk(req.params.id)
                .then(function (user) {
                    Rubro.findAll()
                        .then(function (rubro) {
                            Tipo.findAll()
                            .then(function(tipo){
                    res.render('users/edit', {rubro:rubro, user: user, tipo:tipo })
                })
            })
        })
        },
    //profile: (req, res) => res.render('users/userProfile', 
    //{ user: req.session != undefined && req.session.usuario!= undefined ? req.session.usuario : null}),

    newUser: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            let nuevo = user.userRegister(req.body, req.file);
            console.log(nuevo);
            return nuevo != true ?  res.redirect('ingresar') : res.send('Error al crear el ususrio !!')
        }
        else { res.render('users/register', {  errors: errors.mapped(),
            old: req.body}) }
            console.log(errors);
        
    },

    show: (req, res) => res.render("users/edit", { user: user.one(req.params.id) }), //mostrata el detalle del perfil del usuario//

    update: (req, res) => {
        let result = user.edit(req.body, req.file, req.params.id);
        return result == true ? res.redirect("/usuario/perfil") : res.send("Error al cargar la informacion")
    },//guarda el profile editado//

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