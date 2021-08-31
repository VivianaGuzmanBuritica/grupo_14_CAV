const path = require('path');
const fs = require('fs');
const bcrypt= require('bcryptjs');
let db = require('../database/models');


const model = {
    all: function (req, res) {
        db.User.findAll()
          .then(function(user) {
             return
           }
              );
          },
   
       register: function(req, res) {
           db.User.findAll()
           .then(function(users) {
            db.Rubro.findAll()
            .then(function (rubro) {
                db.Tipo.findAll()
                .then(function(tipo){
               res.redirect('//////', {rubro:rubro, tipo:tipo })
            })
        })
    })
},
   
       /*
        userRegister: async function (data, file,res) {
            
           db.User.create(
               {
                   name: data.name,
                   email: data.email,
                   domicilio: data.domicilio,
                   tipo: data.id_tipo,
                   rubro_interes: data.id_rubro,
                   fotoPerfil: file.filename,
                   fechaNacimiento: data.fechaNacimiento,
                   password: bcrypt.hashSync(data.password, 8),
                   administrador: false
                   })
                   .catch (function(error) {
                       console.log('cmn error '+error);
                       return error;
                       });  
                 
            return res.render('users/login') 
       },
       

       edit: async function(data,file, id) {
        try {
            db.User.update({
                name: data.name,
                email: data.email,
                domicilio: data.domicilio,
                tipo: data.tipo,
                rubro_interes: data.id_rubro,
                fotoPerfil: file.filename,
                fechaNacimiento: data.fechaNacimiento,
                password: bcrypt.hashSync(data.password, 8),
                administrador: false
               },
               { where: { id: id } })
               
            } catch(error) { console.log('detalle '+error);
            
       }
        
    }


            


    /*
    all: function () {
        const directory = path.resolve(__dirname, '../data', 'users.json')
        const file = fs.readFileSync(directory, 'UTF-8')
        const convert = JSON.parse(file)
        return convert;
       
    },

    one: function (id) {
        let usuarios = this.all();
        let resultado = usuarios.find(usuario => usuario.id == id)
        return resultado;
    },

    findByEmail: function(field, text) {
        let usuarios = this.all();
        let resultado = usuarios.find(usuario => usuario[field] == text)
        return resultado;
    },

    userRegister: function (data, file) {
        const directory = path.resolve(__dirname,"../data","users.json");
            let usuarios = this.all();
            let register = {
            id: usuarios.length > 0 ? usuarios[usuarios.length -1].id + 1: 1,
            name: data.name,
            email: data.email,
            domicilio: data.domicilio,
            tipo: data.tipo,
            interes: data.interes,
            fotoPerfil: file.filename,
            fechaNacimiento: data.fechaNacimiento,
            password: bcryptjs.hashSync(data.password, 10),
            administrador: false
                    
        };
        usuarios.push(register);
        fs.writeFileSync(directory,JSON.stringify(usuarios,null,2));
        return true;   
      
    },

    edit: function (data,file,id) {
        const directory = path.resolve(__dirname,"../data","users.json")
        let usuarios = this.all();
        usuarios.map(usuario => {
            if(usuario.id == id ){
            usuario.name= data.name,
            usuario.email= data.email,
            usuario.domicilio= data.domicilio,
            usuario.tipo= data.tipo,
            usuario.interes= data.interes,
            usuario.fechaNacimiento= data.fechaNacimiento,
            usuario.fotoPerfil=file.filename
           
              
            }
            return usuario
        })
        fs.writeFileSync(directory,JSON.stringify(usuarios,null,2));
        return true;
    },
    delete: function (id) {
        const directory = path.resolve(__dirname,"../data","users.json")
        let usuarios = this.all();
        let deleted = this.one(id);
        fs.unlinkSync(path.resolve(__dirname,"../../public/uploads/avatars",deleted.fotoPerfil))
        usuarios = usuarios.filter(usuario => usuario.id != deleted.id )
        fs.writeFileSync(directory,JSON.stringify(usuarios,null,2));
        return true;
    }
    */
};


module.exports = model;