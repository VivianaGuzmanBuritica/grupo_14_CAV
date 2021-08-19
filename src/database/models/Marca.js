module.exports = function (Sequelize, dataTypes) {

    let alias = 'Marca';
    let cols = {
        id_brand: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name_brand: {
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
        tableName: 'marcas',
        timestamps: false
    }

    let Marca = Sequelize.define(alias, cols, config);

    Marca.associate = function(models){
        Marca.hasMany(models.Product, {
            as: 'productos',
            foreignKey: 'id_brand'
        });
    Marca.belongsToMany(models.Categoria, {
            as: 'categorias',
            through: 'marcasCategorias',
            foreignKey: 'id_brand',
            otherKey:'id_category',
            timestamps: false
        });

    }
    return Marca;
    
}