'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.createTable('marcasCategorias', {
        id_brandCategory:{
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },

        id_brand: {
          type: Sequelize.INTEGER,
          reference:{
            model: 'marcas',
            key:'id_marca'
          }

        },
        id_category: {
          type: Sequelize.INTEGER,
          reference:{
            model: 'categorias',
            key:'id_categoria'
          }
        },
        createAt:{
          type:Sequelize.DATE,
          allowNull: true,
          defaultValue: Sequelize.now
        },
        updatedAt:{
          type:Sequelize.DATE,
          allowNull: true,
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
