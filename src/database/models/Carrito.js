module.exports = (sequelize, DataTypes) => {
  let alias = "Carrito"

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
              model: "Pedido",
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


  const Carrito = sequelize.define(alias, cols, config)

  // relaciones con otros modelos
  Carrito.associate = function(models){
      Carrito.belongsTo(models.Pedido,{
          as: 'pedido',
          foreignKey: 'id_pedido'
      }),
      Carrito.hasMany(models.ProductoCarrito,{
        as: 'productocarrito',
        foreignKey: 'id_'
    })
  }

  return Carrito
}

