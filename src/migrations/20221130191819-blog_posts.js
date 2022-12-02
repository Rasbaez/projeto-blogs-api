'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('blog_posts',
     { 
      id: {
        primaryKey: true,
        allowNull:false,
        autoIncrement:true,
        type:Sequelize.INTEGER,
      },
      title:{
        type: Sequelize.STRING,
      },
      content: {
        type: Sequelize.STRING,
      },
      user_id: {
        type:Sequelize.INTEGER,
       
      },
      published: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated: {
        allowNull: false,
        type: Sequelize.DATE
      },
     }
     );
  },

  down: async (queryInterface, _Sequelize) => {
   await queryInterface.dropTable('BlogPosts');
  }
};
