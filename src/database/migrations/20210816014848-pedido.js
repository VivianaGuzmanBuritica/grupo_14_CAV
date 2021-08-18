'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('pedido',{
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull:false,
            autoIncrement: true,
        },
        id_usuario: {
            type: Sequelize.INTEGER,
            allowNull:false,
        },
        id_carrito: {
            type:Sequelize.INTEGER,
        },
    });
    },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('pedido');
  }
};
