module.exports = (sequelize, DataTypes) => {
    let alias = "Order"

    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull:false,
            autoIncrement: true,

        },
        id_usuario: {
            type: DataTypes.INTEGER.UNSIGNED,
            references: {
                model: "User",
                key: "id"
            }
        },
        id_carrito: {
            type: DataTypes.INTEGER.UNSIGNED,
            references: {
                model: "Cart",
                key: "id"
            }
        },
    }

    let config = {
        timestamps: false,
        tableName: "pedido",
        underscored: true
    }


    const Order = sequelize.define(alias, cols, config)

    return Order
}

