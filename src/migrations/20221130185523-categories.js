'use strict';

module.exports = {
  up: async (queryInterface, Datatypes) => {

    await queryInterface.createTable('Categories', {
       id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Datatypes.STRING,
       },
      name: {
        allowNull: false,
        type:Datatypes.STRING,
      },
      });

  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Categories'); 
  }
};
