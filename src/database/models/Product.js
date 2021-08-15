module.exports=function(sequelize, DataTypes){
    
    let alias = 'Product';
    
    let cols ={
        id_producto: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            notNull:true,
            autoIncrement: true,
        }


    }  

    let config = {
        timestamps: false,
        tableName: "carrito",
        underscored: true
    }
    
    let Product = sequelize.define(alias, cols, config);
     return Product;
 }