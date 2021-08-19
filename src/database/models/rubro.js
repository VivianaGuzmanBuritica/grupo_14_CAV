module.exports = function (Sequelize, dataTypes) {

    let alias = 'Rubro';
    let cols = {
        id_rubro: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            
        },
        rubro_nombre: {
            type: dataTypes.STRING,
        },
 
    }

    let config = {
        tanleName: 'rubros',
        timestamps: false
    }

    let Rubro = Sequelize.define(alias, cols, config);

    return Rubro;
}