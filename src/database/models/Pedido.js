module.exports = (sequelize, DataTypes) => {
    let alias = "Pedido"

    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            notNull:true,
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
                model: "Carrito",
                key: "id"
            }
        },
    }

    let config = {
        timestamps: false,
        tableName: "pedido",
        underscored: true
    }


    const Pedido = sequelize.define(alias, cols, config)

      // relaciones con otros modelos
      Pedido.associate = function(models){
        Pedido.hasOne(models.Carrito,{
            as: 'carrito',
            foreignKey: 'id_carrito'
        });
        Pedido.belongsTo(models.user,{
            as: 'usuario',
            foreignKey: 'id_usuario'
        })
    }

    return Pedido
}

