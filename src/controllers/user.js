const user = require('../models/user');
const path = require('path');
const fs = require('fs');
const { validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
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
                    res.render('users/edit', {rubro:rubro, user:user, tipo:tipo })
                })
            })
        })
        },
    //profile: (req, res) => res.render('users/userProfile', 
    //{ user: req.session != undefined && req.session.usuario!= undefined ? req.session.usuario : null}),

    newUser: async(data, res, file) => { 
        
        let tipo = await db.Tipo.findAll();
        let rubro = await db.Rubro.findAll();
        let validacion = validationResult(data);
        if (validacion.isEmpty()) {
            let mail = await db.User.findAll({where:{ email: data.body.email,}})
            console.log(mail.length);
             if (mail.length != 0) {
                 console.log()
                 return res.render('users/register', {errors: {
                     email: {
                         msg: 'Este email ya esta registrado por otro usuario'
                     }
                 }
                ,old:data.body, tipo, rubro })
                
             } else { 
                
                await db.User.create(
                    {
                        name: data.body.name,
                        email: data.body.email,
                        domicilio: data.body.domicilio,
                        tipo: data.body.id_tipo,
                        rubro_interes: data.body.id_rubro,
                        fotoPerfil: data.file.filename,
                        fechaNacimiento: data.body.fechaNacimiento,
                        password: bcrypt.hashSync(data.body.password, 8),
                        administrador: false
                    })
                    .then(()=> {
                        return res.render('users/login')})            
                    .catch(error => res.send(error))   
                    }
        }
        else {
                return res.render('users/register',{errors: validacion.mapped(), old:data.body, 
                tipo, rubro})
            }
            },
        
    
    show: (req, res) => res.render("users/edit", { user: user.one(req.params.id) }), 
    //mostrata el detalle del perfil del usuario//

    update: async function(data,res ) {
        let tipo = await db.Tipo.findAll();
        let rubro = await db.Rubro.findAll();
        let id = data.params.id;
        let validacion = validationResult(data);
        console.log(validacion);
        //console.log(data);
        if (validacion.isEmpty()) {
            await db.User.update({
            name: data.body.name,
            email: data.body.email,
            domicilio: data.body.domicilio,
            tipo: data.body.id_tipo,
            rubro_interes: data.body.id_rubro,
            fotoPerfil: data.file.filename,
            fechaNacimiento: data.body.fechaNacimiento,
            password: bcrypt.hashSync(data.body.password, 8),
            administrador: false
           },
           { where: { id: data.params.id } })
        .then(()=> {
            return res.render('users/login')})            
        .catch(error => res.send(error));
            //return res.render('users/edit',{errors: validacion.mapped(), old:data.body, tipo, rubro})
        }
        else {
            return res.redirect('/usuario/edit/'+data.params.id)//,{errors: validacion.mapped(), old:data.body,  tipo, rubro, id})
        }
        },
    //guarda el profile editado//

    delete: async (req, res) => {
        console.log('cmn '+req.params.id);
        db.User.destroy({
            where: { id: req.params.id }
        })
        .catch(error => console.log('detalle '+error))
        return res.redirect("/");
    },
    //borrar usuario

    userLogin: async (req, res)=> {
        

            let usuario =  await db.User.findAll({where:{ 
                email: req.body.email,
                
            }})
            console.log(usuario)
           
            
        
            //console.log(usuario[0].password)
            if (usuario == undefined) {  res.render('users/login',{ errors: [
                {msg: 'No se encuentra este email en nuestra base de datos'}]
            })} else { if(
                bcrypt.compareSync(req.body.password, usuario[0].password))
                {

                res.cookie("recordame", usuario, {maxAge: 60000}),
                req.session.loggedin = true,                
                req.session.name = usuario[0].id,
                res.send('OK puedes igresar '+usuario[0].name);
            }   else {
                res.render('users/login',{ errors: [
                    {msg: 'contraseña incorrecta'}]
                })
             }
        }
    }
} 
        
    



module.exports = userController;
                  
   
        /*
        
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
