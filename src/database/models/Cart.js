module.exports = (sequelize, DataTypes) => {
    let alias = "Cart"

    let cols = {
        id_carrito: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id_producto: {
            type: DataTypes.INTEGER,

        },
        cantidad: {
            type: DataTypes.INTEGER,

        }
    }

    let config = {
        timestamps: true,
        tableName: "carrito",
        underscored: true
    }


    const Cart = sequelize.define(alias, cols, config)

    return Cart
}

