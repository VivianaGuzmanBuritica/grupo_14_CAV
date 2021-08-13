module.exports = function (Sequelize, dataTypes) {

    let alias = 'Marca';
    let cols = {
        id_marca: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_marca: {
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
        tanleName: 'marcas',
        timestamps: true
    }

    let Marca = Sequelize.define(alias, cols, config);
    return Marca;
}