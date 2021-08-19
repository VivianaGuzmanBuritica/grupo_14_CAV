'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    try {
      await queryInterface.createTable('products', {
        id_product: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: Sequelize.STRING,
        },
        id_brand: {
          type: Sequelize.INTEGER,
          reference:{
            model: 'marcas',
            key:'id_marca'
          }
        },
        description: {
          type: Sequelize.STRING,
        },
        image: {
          type: Sequelize.STRING,
        },
        id_category: {
          type: Sequelize.INTEGER,
          reference:{
            model: 'categorias',
            key:'id_categoria'
          }
        },
        price: {
          type: Sequelize.INTEGER,
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
      await queryInterface.dropTable('products');

    } catch (error) {
      throw error
    }

  }
};
