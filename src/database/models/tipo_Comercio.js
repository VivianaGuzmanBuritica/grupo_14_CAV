module.exports = function (Sequelize, dataTypes) {

    let alias = 'tipoComercio';
    let cols = {
        id_tipo_comercio: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            
        },
        tipo_nombre: {
            type: dataTypes.STRING,
        },
 
    }

    let config = {
        tanleName: 'tipo_comercio',
        timestamps: false
    }

    let tipoComercio = Sequelize.define(alias, cols, config);

    return tipoComercio;
}
