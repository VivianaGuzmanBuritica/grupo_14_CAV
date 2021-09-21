const user = require("../models/user");
const path = require("path");
const fs = require("fs");
const { validationResult, header } = require("express-validator");
const bcrypt = require("bcryptjs");
const db = require("../database/models");
const session = require("express-session");
const { Console } = require("console");

const Users = db.User;
const Rubro = db.Rubro;
const Tipo = db.Tipo;

const userController = {
  login: (req, res) => res.render("users/login"),

  register: (req, res) => {
    Rubro.findAll().then(function (rubro) {
      Tipo.findAll().then(function (tipo) {
        res.render("users/register", { rubro: rubro, tipo: tipo });
      });
    });
  },

  userList: (req, res) => {
    Users.findAll()
      .then(function (user) {
        res.render("users/userList", { user: user });
      })
      .catch(function (e) {
        console.log(e);
      });
  },

  userDetail: (req, res) => {
    db.User.findByPk(req.params.id).then(function (user) {
      Rubro.findAll().then(function (rubro) {
        Tipo.findAll().then(function (tipo) {
          res.render("users/edit", { rubro: rubro, user: user, tipo: tipo });
        });
      });
    });
  },

  userDetailPassword: (req, res) => {
    db.User.findByPk(req.params.id).then(function (user) {
      Rubro.findAll().then(function (rubro) {
        Tipo.findAll().then(function (tipo) {
          res.render("users/editPassword", {
            rubro: rubro,
            user: user,
            tipo: tipo,
          });
        });
      });
    });
  },

  newUser: async (data, res, file) => {
    let tipo = await db.Tipo.findAll();
    let rubro = await db.Rubro.findAll();
    let validacion = validationResult(data);
    if (validacion.isEmpty()) {
      let mail = await db.User.findAll({ where: { email: data.body.email } });
      console.log(mail.length);
      if (mail.length != 0) {
        console.log();
        return res.render("users/register", {
          errors: {
            email: {
              msg: "Este email ya esta registrado por otro usuario",
            },
          },
          old: data.body,
          tipo,
          rubro,
        });
      } else {
        await db.User.create({
          name: data.body.name,
          email: data.body.email,
          domicilio: data.body.domicilio,
          tipo: data.body.id_tipo,
          rubro_interes: data.body.id_rubro,
          fotoPerfil: data.file.filename,
          fechaNacimiento: data.body.fechaNacimiento,
          password: bcrypt.hashSync(data.body.password, 8),
          administrador: false,
        })
          .then(() => {
            return res.render("users/login");
          })
          .catch((error) => res.send(error));
      }
    } else {
      return res.render("users/register", {
        errors: validacion.mapped(),
        old: data.body,
        tipo,
        rubro,
      });
    }
  },

  show: (req, res) =>
    res.render("users/edit", { user: user.one(req.params.id) }),
  //mostrata el detalle del perfil del usuario//

  update: async function (data, res) {
    let tipo = await db.Tipo.findAll();
    let rubro = await db.Rubro.findAll();
    let id = data.params.id;
    let validacion = validationResult(data);
    console.log(validacion);
    //console.log(data);
    if (validacion.isEmpty()) {
      await db.User.update(
        {
          name: data.body.name,
          email: data.body.email,
          domicilio: data.body.domicilio,
          tipo: data.body.id_tipo,
          rubro_interes: data.body.id_rubro,
          fotoPerfil: data.file.filename,
          fechaNacimiento: data.body.fechaNacimiento,
          //password: bcrypt.hashSync(data.body.password, 8),
          administrador: false,
        },
        { where: { id: data.params.id } }
      )
        .then(() => {
          return res.render("users/login");
        })
        .catch((error) => res.send(error));
    } else {
      return res.redirect("/usuario/edit/" + data.params.id);
    }
  },
  //guarda el profile editado//

  updatePassword: async function (req, res) {
    
    let id = req.params.id;
    console.log("newpass  "+req.body.newPassword);
    
    await db.User.update(
      {
        password: bcrypt.hashSync(req.body.newPassword, 8), 
      },
      { where: { id: id } }
    )
      .then(() => {
        return res.render("users/login");
      })
      .catch((error) => res.send(error));
  },

  delete: async (req, res) => {
    db.User.destroy({
      where: { id: req.params.id },
    }).catch((error) => console.log("detalle " + error));
    return res.redirect("/");
  },
  //borrar usuario

  userLogin: async (req, res) => {
    try {
      let usuario = await db.User.findOne({
        where: {
          email: req.body.email,
        },
      });
      if (!usuario) {
        res.render("users/login", {
          errors: [
            { msg: "No se encuentra este email en nuestra base de datos" },
          ],
        });
      } else {
        if (bcrypt.compareSync(req.body.password, usuario.password)) {
          userToLogin = usuario.dataValues;
          delete userToLogin.password;
          req.session.loggedin = true;
          req.session.userLogged = userToLogin;
          console.log("userLogged.cmn");
          console.log(userToLogin);

          if (req.body.recordame) {
            res.cookie("userMail", req.body.email, { maxAge: 1000 * 60 * 1 });
          }

          console.log("Cookies.cmn");
          console.log(req.cookies.userMail);
          return res.redirect("/");
        } else {
          res.render("users/login", {
            errors: [{ msg: "Usuario y/o contraseña incorrectas" }],
          });
        }
      }
    } catch (error) {
      res.send(error);
    }
  },

  logOut: (req, res) => {
    console.log("logout"), res.clearCookie();
    req.session.destroy();
    res.redirect("/");
  },
};

module.exports = userController;
