module.exports = (sequelize, DataTypes) => {
    let alias = "ProductoCarrito"
 
    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull:false,
            autoIncrement: true
        },
        id_product: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull:false,
        },
        cantidad: {
            type: DataTypes.INTEGER.UNSIGNED,
        },
        id_carrito: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull:false,
        },
        subtotal: {
            type: DataTypes.INTEGER.UNSIGNED,
        }
    }
    
    let config = {
        timestamps: false,
        tableName: 'relacion_producto_carrito',
        underscored: true
    }

    const ProductoCarrito = sequelize.define(alias, cols, config)

    // relaciones con otros modelos
    ProductoCarrito.associate = function(models){
        ProductoCarrito.belongsTo(models.Carrito,{
        as: 'carrito',
        foreignKey: 'id_carrito'
        });
       ProductoCarrito.belongsTo(models.Product,{
        as: 'producto',
        foreignKey: 'id_producto'
       })
    }    

    return ProductoCarrito
};