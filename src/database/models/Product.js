module.exports = function (Sequelize, dataTypes) {

    let alias = 'Product';
    let cols = {
        id_product: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING,
        },
        id_brand: {
            type: dataTypes.INTEGER,
        },
        description: {
            type: dataTypes.STRING,
        },
        image: {
            type: dataTypes.STRING,
        },
        id_category: {
            type: dataTypes.INTEGER,
        },
        price: {
            type: dataTypes.INTEGER,
        },
        createAt: {
            type: dataTypes.DATE,
            allowNull: true,
            defaultValue: dataTypes.now
        },
        updatedAt: {
            type: dataTypes.DATE,
            allowNull: true,
            defaultValue: dataTypes.now
        }
    }

    let config = {
        tableName: 'products',
        timestamps: false
    }

    let Product = Sequelize.define(alias, cols, config);

    Product.associate = function (models) {
        Product.belongsTo(models.Marca, {
            as: 'marcas',
            foreignKey: 'id_brand'
        });
        
        Product.belongsTo(models.Categoria, {
            as: 'categorias',
            foreignKey: 'id_category',
            targetKey: 'id_category'
            });

        Product.hasMany(models.Pedido, {
            as: 'pedido',
            foreignKey: 'id_producto',
            })

        }

        

        return Product;
    }

