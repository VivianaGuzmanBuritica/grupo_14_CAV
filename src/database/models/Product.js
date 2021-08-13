module.exports = function (Sequelize, dataTypes) {

    let alias = 'Product';
    let cols = {
        id_producto: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING,
        },
        ìd_marca: {
            type: dataTypes.INTEGER,       
        },
        descripcion: {
            type: dataTypes.STRING,
        },
        imagen: {
            type: dataTypes.INTEGER,
        },
        id_categoria: {
            type: dataTypes.INTEGER,          
        },
        precio: {
            type: dataTypes.INTEGER,
        },
        createAt: {
            type: dataTypes.DATE,
            allowNull: false,
            defaultValue: dataTypes.now
        },
        updatedAt: {
            type: dataTypes.DATE,
            allowNull: false,
            defaultValue: dataTypes.now
        }
    }

    let config ={
            tanleName:'product',
            timestamps: true
    }

    let Product = Sequelize.define(alias, cols, config);
    return Product;
}