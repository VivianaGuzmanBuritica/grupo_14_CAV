'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tipo_comercio', {
      id_tipo_comercio: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    
    tipo_nombre: {
      type: Sequelize.STRING,
        allowNull: false
    },
    
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tipo_comercio');
  }
};