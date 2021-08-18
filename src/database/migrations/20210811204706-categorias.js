'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.createTable('categorias', {
        id_category: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name_category: {
          type: Sequelize.STRING,
        },
        createAt:{
          type:Sequelize.DATE,
          allowNull: true,
          defaultValue: Sequelize.now
        },
        updatedAt:{
          type:Sequelize.DATE,
          allowNull: true,
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
