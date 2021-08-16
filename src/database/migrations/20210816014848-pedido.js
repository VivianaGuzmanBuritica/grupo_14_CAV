'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('pedido',{
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull:false,
            autoIncrement: true,
        },
        id_usuario: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull:false,
        },
        id_carrito: {
            type: DataTypes.INTEGER.UNSIGNED,
        },
    });
    },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('pedido');
  }
};
