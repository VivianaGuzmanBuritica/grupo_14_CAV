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
        ìd_marca: {
          type: Sequelize.INTEGER,
        },
        descripcion: {
          type: Sequelize.STRING,
        },
        imagen: {
          type: Sequelize.INTEGER,
        },
        id_categoria: {
          type: Sequelize.INTEGER,
        },
        precio: {
          type: Sequelize.INTEGER,
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
