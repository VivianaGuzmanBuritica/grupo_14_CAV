'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('relacion_producto_carrito', 
      {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull:false,
            autoIncrement: true
        },
        id_producto: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull:false,
        },
        cantidad: {
            type: DataTypes.INTEGER.UNSIGNED,
        },
        id_carrito: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull:false,
        },
        subtotal: {
            type: DataTypes.DECIMAL.UNSIGNED,        }
    });
     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('relacion_producto_carrito');
  }
};
