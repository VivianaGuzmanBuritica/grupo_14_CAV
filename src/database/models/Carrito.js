module.exports = (sequelize, DataTypes) => {
  let alias = "Carrito"

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
      },
      pagado: {
          type: DataTypes.BOOLEAN,
          allowNull:false,
      }
  }

  let config = {
      timestamps: true,
      tableName: "carrito",
      underscored: true
  }


  const Carrito = sequelize.define(alias, cols, config)

  // relaciones con otros modelos
  Carrito.associate = function(models){
      Carrito.belongsTo(models.Pedido,{
          as: 'pedido',
          foreignKey: 'id_pedido'
      }),
      Carrito.hasMany(models.ProductoCarrito,{
        as: 'productocarrito',
        foreignKey: 'id_carrito'
    })
  }

  return Carrito
}

