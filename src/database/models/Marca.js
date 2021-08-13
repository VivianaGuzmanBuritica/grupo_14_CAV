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

    Marca.associate = function(models){
        Marca.hasMany(models.Product, {
            as: 'productos',
            foreignkey: 'id_marca'
        });
    Marca.belongsToMany(models.Categoria, {
            as: 'categorias',
            through: 'marcasCategorias',
            foreignkey: 'id_marca',
            otherkey:'id_categoria',
            timestamps: true
        });

    }
    return Marca;
}