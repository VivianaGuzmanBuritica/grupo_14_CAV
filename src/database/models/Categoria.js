module.exports = function (Sequelize, dataTypes) {

    let alias = 'Categoria';
    let cols = {
        id_category: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name_category: {
            type: dataTypes.STRING,
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
        tanleName: 'categorias',
        timestamps: true
    }

    let Categoria = Sequelize.define(alias, cols, config);

    Categoria.associate = function(models){
        Categoria.hasMany(models.Product, {
            as: 'productos',
            foreignkey: 'id_category'
        });
        Categoria.belongsToMany(models.Marca, {
            as: 'marcas',
            through: 'marcasCategorias',
            foreignkey: 'id_category',
            otherkey:'id_brand',
            timestamps: true
        });
    }

    return Categoria;
}