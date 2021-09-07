'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('pedido', 
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          primaryKey: true,
          allowNull:false,
          autoIncrement: true
      },
      id_producto: {
          type: DataTypes.INTEGER,
          allowNull:false,
      },
      id_usuario: {
          type: dataTypes.BIGINT(10).UNSIGNED,
          allowNull:false,

      },
      precio_actual: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull:false,
      },
      cantidad: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull:false,
      },
      fecha: {
          type: DataTypes.DATE,
          allowNull:false,
      }
    });
     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('pedido');
  }
};
