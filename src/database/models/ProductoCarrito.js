module.exports = (sequelize, DataTypes) => {
    let alias = "ProductoCarrito"
 
    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            notNull:true,
            autoIncrement: true
        },
        id_producto: {
            type: DataTypes.INTEGER.UNSIGNED,
            notNull:true,
            references: {
                model: 'Product',
                key: 'id_producto',
            }
        },
        cantidad: {
            type: DataTypes.INTEGER.UNSIGNED,
            notNull:true,
        },
        id_carrito: {
            type: DataTypes.INTEGER.UNSIGNED,
            references: {
                model: 'Carrito',
                key: 'id',
            }
        },
        subtotal: {
            type: DataTypes.DECIMAL.UNSIGNED,
            notNull:true,
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
        ProductoCarrito.hasOne(models.Carrito,{
        as: 'carrito',
        foreignKey: 'id_carrito'
        }),
        ProductoCarrito.belongsTo(models.Producto,{
            as: 'producto',
            foreignKey: 'id_producto'
        });
    
}


    return ProductoCarrito
};