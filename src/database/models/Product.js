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
        id_marca: {
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

    let config = {
        tanleName: 'product',
        timestamps: true
    }

    let Product = Sequelize.define(alias, cols, config);

    Product.associate = function (models) {
        Product.belongsTo(models.Marca, {
            as: 'marca',
            foreignkey: 'id_marca'
        });
        
        Product.belongsTo(models.Categoria, {
                as: 'categoria',
                foreignkey: 'id_categoria'
            })
        }

        return Product;
    }