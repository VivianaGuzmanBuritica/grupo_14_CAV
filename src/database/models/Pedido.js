module.exports = (sequelize, DataTypes) => {
    let alias = "Pedido"
 
    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull:false,
            autoIncrement: true
        },
        id_producto: {
            type: DataTypes.INTEGER,
            allowNull:false,
        },
        id_usuario: {
            type: DataTypes.BIGINT(10).UNSIGNED,
            allowNull:false,

        },
        precio_actual: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull:false,
        },
        cantidad: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull:false,
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull:false,
        }
    }
    
    let config = {
        timestamps: false,
        tableName: 'pedido',
        underscored: true
    }

    const Pedido = sequelize.define(alias, cols, config)

    // relaciones con otros modelos
    Pedido.associate = function(models){
       Pedido.belongsTo(models.Product,{
        as: 'producto',
        foreignKey: 'id_producto'
       });
       Pedido.belongsTo(models.User,{
        as: 'usuario',
        foreignKey: 'id_usuario'
       })
    }    

    return Pedido
};