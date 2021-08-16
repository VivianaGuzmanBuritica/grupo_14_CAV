'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('carrito', {
      id: {
          type: DataTypes.INTEGER.UNSIGNED,
          primaryKey: true,
          allowNull:false,
          autoIncrement: true,

      },
      total: {
          type: DataTypes.DECIMAL.UNSIGNED,
          allowNull:false,
      },
      id_pedido: {
          type: DataTypes.INTEGER.UNSIGNED,
      },
      pagado: {
          type: DataTypes.BOOLEAN,
          allowNull:false,
      }
  });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('carrito');
  }
};