module.exports = function(sequelize,dataTypes){

    let alias = "User";

    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
      
        name: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(255),
            
            
        },
        domicilio: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        tipo: {
            type: dataTypes.BIGINT(10),
            allowNull: false   
        },
        rubro_interes: {
            type: dataTypes.BIGINT(10),
            
        },
        fotoPerfil: {
        type: dataTypes.STRING(255),
        },
        fechaNacimiento: {
        type: dataTypes.DATEONLY,
        },
        password: {
            type: dataTypes.STRING(255),
        },
        administrador: {
            type: dataTypes.STRING(255),
        }
     
    };

    let config = {
        tableName: "usuarios",
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const User = sequelize.define(alias, cols, config); 
    /*
        User.associate = function(models){
        User.belongsToMany(models.Tipo, {
            as: "tipo_comercio",
            foreignKey: "tipo",
            otherkey: "id_tipo_comercio",
            timestamps:false
        });
    }
*/
    return User;
}