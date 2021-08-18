'use strict';
module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('carrito', {
      id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull:false,
          autoIncrement: true,

      },
      total: {
          type: Sequelize.INTEGER,
          allowNull:false,
      },
      id_pedido: {
          type: Sequelize.INTEGER,
      },
      pagado: {
          type: Sequelize.BOOLEAN,
          allowNull:false,
      }
  });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('carrito');
  }
};