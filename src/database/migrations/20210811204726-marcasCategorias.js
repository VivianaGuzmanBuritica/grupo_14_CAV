'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.createTable('marcasCategorias', {
        id_marcaCategoria:{
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },

        id_marca: {
          type: Sequelize.INTEGER,
          reference:{
            model: 'marcas',
            key:'id_marca'
          }

        },
        id_categoria: {
          type: Sequelize.INTEGER,
          reference:{
            model: 'categorias',
            key:'id_categoria'
          }
        },
        createAt:{
          type:Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.now
        },
        updatedAt:{
          type:Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.now
        }
      });

    } catch (error) {
      throw error
    }


  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.dropTable('marcasCategorias');

    } catch (error) {
      throw error
    }

  }
};
