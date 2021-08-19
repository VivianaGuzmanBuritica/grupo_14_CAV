module.exports = function (Sequelize, dataTypes) {

    let alias = 'Tipo';
    let cols = {
        id_tipo: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            
        },
        tipo_nombre: {
            type: dataTypes.STRING,
        },
 
    }

    let config = {
        tableName: 'tipo_user',
        timestamps: false
    }

    let Tipo = Sequelize.define(alias, cols, config);

    return Tipo;
}

