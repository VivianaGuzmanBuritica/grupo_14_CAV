module.exports = (sequelize, DataTypes) => {
    let alias = "Cart"

    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            notNull:true,
            autoIncrement: true,

        },
        total: {
            type: DataTypes.DECIMAL.UNSIGNED,
            notNull:true,
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
            notNull:true,
        }
    }

    let config = {
        timestamps: false,
        tableName: "carrito",
        underscored: true
    }


    const Cart = sequelize.define(alias, cols, config)

    // relaciones con otros modelos

    return Cart
}

