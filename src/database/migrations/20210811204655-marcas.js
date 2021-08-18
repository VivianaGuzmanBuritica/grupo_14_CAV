'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.createTable('marcas', {
        id_brand: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name_brand: {
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
      await queryInterface.dropTable('marcas');
    } catch (error) {
      throw error
    }


  }
};
