module.exports = function (Sequelize, dataTypes) {

    let alias = 'rubroUser';
    let cols = {
        id_usuario: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            
        },
        id_rubro: {
            type: dataTypes.INTEGER,
        },
 
    }

    let config = {
        tanleName: 'usuario_rubro',
        timestamps: false
    }
    let rubroUser = Sequelize.define(alias, cols, config);

    return rubroUser;
}
