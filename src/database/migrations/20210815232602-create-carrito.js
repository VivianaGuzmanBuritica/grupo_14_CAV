'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('carrito', {
      id: {
          type: DataTypes.INTEGER.UNSIGNED,
          primaryKey: true,
          notNull:true,
          autoIncrement: true,

      },
      total: {
          type: DataTypes.DECIMAL.UNSIGNED,
          notNull:true,
      },
      id_pedido: {
          type: DataTypes.INTEGER.UNSIGNED,
          references: {
              model: "Pedido",
              key: "id"
          }
      },
      pagado: {
          type: DataTypes.BOOLEAN,
          notNull:true,
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('carrito');
  }
};