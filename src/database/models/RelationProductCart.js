module.exports = (sequelize, DataTypes) => {
    let alias = "RelationProductCart"

    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull:false,
            autoIncrement: true,

        },
        id_producto: {
            type: DataTypes.INTEGER.UNSIGNED,
            references: {
                model: "Product",
                key: "id_producto"
            }
        },
        cantidad: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        id_carrito: {
            type: DataTypes.INTEGER.UNSIGNED,
            references: {
                model: "Cart",
                key: "id"
            }
        },
        subtotal: {
            type: DataTypes.DECIMAL.UNSIGNED,
            allowNull: false
        },
    }

    let config = {
        timestamps: false,
        tableName: "relacion_producto_carrito",
        underscored: true
    }


    const RelationProductCart = sequelize.define(alias, cols, config)

    return RelationProductCart
}

