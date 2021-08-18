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
        tableName: 'categorias',
        timestamps: false
    }

    let Categoria = Sequelize.define(alias, cols, config);

    Categoria.associate = function(models){
        Categoria.hasMany(models.Product, {
            as: 'productos',
            foreignKey: 'id_category'
        });
        Categoria.belongsToMany(models.Marca, {
            as: 'marcas',
            through: 'marcasCategorias',
            foreignKey: 'id_category',
            otherKey:'id_brand',
            timestamps: true
        });
    }

    return Categoria;
}