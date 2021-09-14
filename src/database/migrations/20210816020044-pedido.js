'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('pedido', 
      {
        id: {
          type: INTEGER.UNSIGNED,
          primaryKey: true,
          allowNull:false,
          autoIncrement: true
      },
      id_producto: {
          type: INTEGER,
          allowNull:false,
      },
      id_usuario: {
          type: BIGINT(10).UNSIGNED,
          allowNull:false,

      },
      precio_actual: {
          type: INTEGER.UNSIGNED,
          allowNull:false,
      },
      cantidad: {
          type: INTEGER.UNSIGNED,
          allowNull:false,
      },
      fecha: {
          type: DATE,
          allowNull:false,
      }
    });
     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('pedido');
  }
};
