const user = require('../models/user');

const userController = {
    login: (req, res) => res.render('login'),

    registro: (req, res) => res.render('register'),


    userLogin: function (req, res) {
        let login = {
            user: req.body.user,
            password: req.body.password,
        }
        console.log(req.body);

        res.redirect('/profile')
    },

    create: (req,res) => res.render("register"),//crear usuario
    save: (req,res) => {
        let result = user.new(req.body,req.file)
        return result == true ? res.redirect("/user/profile") : res.send("Error al cargar la informacion") 
    },// guardar el usuario guardado
    show: (req, res) => res.render("user/profile", { user: user.one(req.params.id) }), //mostrata el detalle del perfil del usuario//
    edit: (req, res) => res.render("user/edit", { user: user.one(req.params.id) }),//mostrar vista perfila editar//
    update: (req, res) => {
        let result = user.edit(req.body, req.file, req.params.id)
        return result == true ? res.redirect("/") : res.send("Error al cargar la informacion")
    },//guarda el profile editado//
    delete: (req,res) => {
        let result = user.delete(req.params.id);
        return result == true ? res.redirect("/") : res.send("Error al cargar la informacion") 
    },//borrar usuario

    userRegister: function (req, res) {
        let register = {
            name: req.body.name,
            username: req.body.username,
            domicilio: req.body.domicilio,
            tipo: req.body.tipo,
            interes: req.body.interes,
            fechaNacimiento: req.body.fechaNacimiento,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword
        }
        console.log(req.body);

        res.redirect('/login')
    }

};

module.exports = userController;