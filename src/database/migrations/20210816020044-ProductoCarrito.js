'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('relacion_producto_carrito', 
      {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull:false,
            autoIncrement: true
        },
        id_producto: {
            type: Sequelize.INTEGER,
            allowNull:false,
        },
        cantidad: {
            type:Sequelize.INTEGER,
        },
        id_carrito: {
            type: Sequelize.INTEGER,
            allowNull:false,
        },
        subtotal: {
            type: Sequelize.INTEGER,     
             }
    });
     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('relacion_producto_carrito');
  }
};
