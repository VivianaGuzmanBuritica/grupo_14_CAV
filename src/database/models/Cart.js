module.exports = (sequelize, DataTypes) => {
    let alias = "Cart"

    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull:false,
            autoIncrement: true,

        },
        total: {
            type: DataTypes.DECIMAL.UNSIGNED,
            allowNull:false,
        },
        id_pedido: {
            type: DataTypes.INTEGER.UNSIGNED,
            references: {
                model: "Order",
                key: "id"
            }
        },
        pagado: {
            type: DataTypes.BOOLEAN,
            allowNull: false

        }
    }

    let config = {
        timestamps: false,
        tableName: "carrito",
        underscored: true
    }


    const Cart = sequelize.define(alias, cols, config)

    return Cart
}

