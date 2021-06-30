const path = require('path');
const fs = require('fs');

const model = {
    all: function () {
        const directory = path.resolve(__dirname, '../data', 'users.json')
        const file = fs.readFileSync(directory, 'UTF-8')
        const convert = JSON.parse(file)
        return convert
    },
    one: function (id) {
        let usuarios = this.all();
        let resultado = usuarios.find(usuario => usuario.id == id)
        return resultado;
    },
    new: function (data,file) {
        const directory = path.resolve(__dirname,"../data","users.json")
        let usuarios = this.all();
        let nuevo = {
            id: usuarios.length > 0 ? usuarios[usuarios.length -1].id + 1: 1,
            name: data.name,
            username: data.username,
            domicilio: data.domicilio,
            tipo: data.tipo,
            interes: data.interes,
            fechaNacimiento: data.fechaNacimiento,
            fotoPerfil:file.filename,
            image: file.filename
        }    
        usuarios.push(nuevo)
        fs.writeFileSync(directory,JSON.stringify(usuarios,null,2));
        return true;    
    },
    edit: function (data,file,id) {
        const directory = path.resolve(__dirname,"../data","users.json")
        let usuarios = this.all();
        usuarios.map(usuario => {
            if(producto.id == id ){
            usuario.name= data.name,
            usuario.username= data.username,
            usuario.domicilio= data.domicilio,
            usuario.tipo= data.tipo,
            usuario.interes= data.interes,
            usuario.fechaNacimiento= data.fechaNacimiento,
            usuario.fotoPerfil=file.filename,
            usuario.image= file.filename
                return usuario
            }
            return usuario
        })
        fs.writeFileSync(directory,JSON.stringify(usuarios,null,2));
        return true;
    },
    delete: function (id) {
        const directory = path.resolve(__dirname,"../data","products.json")
        let productos = this.all();
        let deleted = this.one(id);
        // eliminamos la imagen de la carpeta upload
        fs.unlinkSync(path.resolve(__dirname,"../../public/uploads/products",deleted.image))
        // filtarmos el producto que deaseamos eliminar
        productos = productos.filter(producto => producto.id != deleted.id )
        fs.writeFileSync(directory,JSON.stringify(productos,null,2));
        return true;
    }
};


module.exports = model;