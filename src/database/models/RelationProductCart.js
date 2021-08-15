module.exports = (sequelize, DataTypes) => {
    let alias = "Relationproductcart"
 
    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            notNull:true,
            autoIncrement: true
        },
        id_product: {
            type: DataTypes.INTEGER.UNSIGNED,
            notNull:true,
        },
        cantidad: {
            type: DataTypes.INTEGER.UNSIGNED,
            notNull:true,
        },
        id_carrito: {
            type: DataTypes.INTEGER.UNSIGNED,
            references: {
                model: 'Cart',
                key: 'id',
            }
        },
        subtotal: {
            type: DataTypes.DECIMAL.UNSIGNED,
            notNull:true,
        }
    }
    
    let config = {
        timestamps: false,
        tableName: 'relacion_producto_carrito',
        underscored: true
    }

    const Relationproductcart = sequelize.define(alias, cols, config)

    return Relationproductcart
};