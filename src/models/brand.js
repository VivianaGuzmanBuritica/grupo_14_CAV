const path = require('path');
const fs = require('fs');
const model = {
    all: function() {
        const directory = path.resolve(__dirname,"../data","brands.json")
        const file = fs.readFileSync(directory,"utf-8")
        const convert = JSON.parse(file)
        return convert
    },
    one: function (id) {
        let marcas = this.all();
        let resultado = marcas.find(marca => marca.id == id)
        return resultado;
    }
};
module.exports = model;