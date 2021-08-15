'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('rubros', {
      id_rubro: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        
    },
    
    rubro_name: {
      type: Sequelize.STRING,
        allowNull: false
    }
    
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('rubros');
  }
};