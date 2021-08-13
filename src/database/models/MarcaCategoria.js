module.exports = function (Sequelize, dataTypes) {

    let alias = 'MarcaCategoria';
    let cols = {
        id_marcaCategoria: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        id_marca: {
            type: dataTypes.INTEGER,
            reference: {
                model: 'marcas',
                key: 'id_marca'
            }

        },
        id_categoria: {
            type: dataTypes.INTEGER,
            reference: {
                model: 'categorias',
                key: 'id_categoria'
            }
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
        tanleName: 'marcasCategorias',
        timestamps: true
    }

    let MarcaCategoria = Sequelize.define(alias, cols, config);
    return MarcaCategoria;
}