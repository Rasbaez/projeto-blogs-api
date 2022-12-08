module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', 
  {
    id: {
      primaryKey: true,
      allowNull:false,
      autoIncrement:true,
      type:DataTypes.INTEGER,
    },
    title:{
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.STRING,
    },
    userId: {
      type:DataTypes.INTEGER,
      field: 'user_id',
      // allowNull: false,
    },
    published: {
      type: DataTypes.DATE
    },
    updated: {
      type: DataTypes.DATE
    }, 
  },

  {
    timestamps: false,
    tableName: 'blog_posts',
    underscored: true,
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user'
    });
  };

  return BlogPost;
};