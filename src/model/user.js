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
            //tipo: ,
            //interes: ,
            fotoPerfil:file.filename,
            //brand: parseInt(data.brand),
            //colors: data.colors.map(color => parseInt(color)),
            image: file.filename
        }    
        usuarios.push(nuevo)
        fs.writeFileSync(directory,JSON.stringify(usuarios,null,2));
        return true;    
    },
    // edit: ,
    //delete:
}


module.exports = mode;