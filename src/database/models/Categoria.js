module.exports = function (Sequelize, dataTypes) {

    let alias = 'Categoria';
    let cols = {
        id_categoria: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_categoria: {
            type: dataTypes.STRING,
        },
        createAt: {
            type: dataTypes.DATE,
            allowNull: false,
            defaultValue: dataTypes.now
        },
        updatedAt: {
            type: dataTypes.DATE,
            allowNull: false,
            defaultValue: dataTypes.now
        }
    }

    let config = {
        tanleName: 'categorias',
        timestamps: true
    }

    let Categoria = Sequelize.define(alias, cols, config);
    return Categoria;
}