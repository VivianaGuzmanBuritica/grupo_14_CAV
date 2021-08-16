'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usuarios', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    
    name: {
      type: Sequelize.STRING,
        allowNull: false
    },
    email: {
      type: Sequelize.STRING,
        
        
    },
    domicilio: {
      type: Sequelize.STRING,
        allowNull: false
    },
    tipo: {
      type: Sequelize.INTEGER,
        allowNull: false   
    },
    rubro_interes: {
      type: Sequelize.INTEGER,
        
    },
    fotoPerfil: {
      type: Sequelize.STRING,
    },
    fechaNacimiento: {
      type: Sequelize.DATEONLY,
    },
    password: {
      type: Sequelize.STRING,
    },
    administrador: {
      type: Sequelize.STRING,
    },
    createAt:{
      type:Sequelize.DATE,
      defaultValue: Sequelize.now
    },
    updatedAt:{
      type:Sequelize.DATE,
      defaultValue: Sequelize.now
    }

    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('usuarios');
  }
};