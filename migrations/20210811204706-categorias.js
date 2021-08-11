'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.createTable('categorias', {
        id_categoria: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        nombre_categoria: {
          type: Sequelize.STRING,
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
      await queryInterface.dropTable('categorias');

    } catch (error) {
      throw error
    }


  }
};
