'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usuario_rubro', {
      id_usuario: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        
    },
    
    id_rubro: {
      type: Sequelize.INTEGER,
        
    }
    
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('usuario_rubro');
  }
};