'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('pedido',{
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            notNull:true,
            autoIncrement: true,

        },
        id_usuario: {
            type: DataTypes.INTEGER.UNSIGNED,
            references: {
                model: "User",
                key: "id"
            }
        },
        id_carrito: {
            type: DataTypes.INTEGER.UNSIGNED,
            references: {
                model: "Carrito",
                key: "id"
            }
        },
    });
    },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('pedido');
  }
};
