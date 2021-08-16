'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('relacion_producto_carrito', 
      {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            notNull:true,
            autoIncrement: true
        },
        id_producto: {
            type: DataTypes.INTEGER.UNSIGNED,
            notNull:true,
        },
        cantidad: {
            type: DataTypes.INTEGER.UNSIGNED,
            notNull:true,
        },
        id_carrito: {
            type: DataTypes.INTEGER.UNSIGNED,
            references: {
                model: 'Carrito',
                key: 'id',
            }
        },
        subtotal: {
            type: DataTypes.DECIMAL.UNSIGNED,
            notNull:true,
        }
    });
     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('relacion_producto_carrito');
  }
};
