'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    try {
      await queryInterface.createTable('products', {
        id_producto: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        nombre: {
          type: Sequelize.STRING,
        },
        id_marca: {
          type: Sequelize.INTEGER,
          reference:{
            model: 'marcas',
            key:'id_marca'
          }
        },
        descripcion: {
          type: Sequelize.STRING,
        },
        imagen: {
          type: Sequelize.STRING,
        },
        id_categoria: {
          type: Sequelize.INTEGER,
          reference:{
            model: 'categorias',
            key:'id_categoria'
          }
        },
        precio: {
          type: Sequelize.INTEGER,
        }, 
        createAt:{
          type:Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.now
        },
        updatedAt:{
          type:Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.now
        }

      });

    } catch (error) {
      throw error
    }


  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.dropTable('products');

    } catch (error) {
      throw error
    }

  }
};
