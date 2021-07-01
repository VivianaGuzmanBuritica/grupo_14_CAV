const path = require('path');
const fs = require('fs');

const productModel = {
    all: function() {
        const directory = path.resolve(__dirname,"../data","products.json")
        const file = fs.readFileSync(directory,"utf8")
        const convert = JSON.parse(file)
        return convert
    },

}

module.exports = productModel