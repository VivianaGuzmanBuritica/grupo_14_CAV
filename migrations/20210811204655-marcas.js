'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.createTable('marcas', {
        id_marca: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        nombre_marca: {
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
      await queryInterface.dropTable('marcas');
    } catch (error) {
      throw error
    }


  }
};
