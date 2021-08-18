module.exports = function (Sequelize, dataTypes) {

    let alias = 'MarcaCategoria';
    let cols = {
        id_brandCategory: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        id_brand: {
            type: dataTypes.INTEGER,
            reference: {
                model: 'marcas',
                key: 'id_marca'
            }

        },
        id_category: {
            type: dataTypes.INTEGER,
            reference: {
                model: 'categorias',
                key: 'id_categoria'
            }
        },
        createAt: {
            type: dataTypes.DATE,
            allowNull: true,
            defaultValue: dataTypes.now
        },
        updatedAt: {
            type: dataTypes.DATE,
            allowNull: true,
            defaultValue: dataTypes.now
        }
    }

    let config = {
        tanleName: 'marcasCategorias',
        timestamps: false
    }

    let MarcaCategoria = Sequelize.define(alias, cols, config);
    

    return MarcaCategoria;
}