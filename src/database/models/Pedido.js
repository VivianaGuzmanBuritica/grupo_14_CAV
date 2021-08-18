module.exports = (sequelize, DataTypes) => {
    let alias = "Pedido"

    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull:false,
            autoIncrement: true,

        },
        id_usuario: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull:false,
        },
        id_carrito: {
            type: DataTypes.INTEGER.UNSIGNED,
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
            foreignKey: 'id_pedido'
        });
      //  Pedido.belongsTo(models.user,{
        //    as: 'usuario',
        //    foreignKey: 'id_usuario'
       // })
    }

    return Pedido
}

