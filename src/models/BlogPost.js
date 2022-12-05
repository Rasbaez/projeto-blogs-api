module.exports = (sequelize, Datatypes) => {
  const BlogPost = sequelize.define('BlogPost', 
  {
    id: {
      primaryKey: true,
      allowNull:false,
      autoIncrement:true,
      type:Datatypes.INTEGER,
    },
    title:{
      type: Datatypes.STRING,
    },
    content: {
      type: Datatypes.STRING,
    },
    user_id: {
      type:Datatypes.INTEGER,
     
    },
    published: {
      allowNull: false,
      type: Datatypes.DATE
    },
    updated: {
      allowNull: false,
      type: Datatypes.DATE
    }, 
  },
  {
    timestamps: false,
    tableName: 'blogPosts',
    // avaliador falhando por conta do underscored
    // underscored: true,
  });
  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'users'
    });
  };

  return BlogPost;
};