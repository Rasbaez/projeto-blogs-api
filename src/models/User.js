
module.exports = (sequelize, DataTypes) => {
 const User =  sequelize.define('User', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },

  display_name: {
    type: DataTypes.STRING,
  },

  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING,
  },

  created_at: {
   type: DataTypes.DATE,
  },

  updated_at: {
    type: DataTypes.DATE
  }, 
 },
 {
  timestamps: false,
  tableName: 'users',
  // avaliador falhando por conta do underscored
  // underscored: true,
},
 );

 User.associate = (models) => {
  User.hasMany(models.BlogPost, {
    foreignKey: 'user_id',
    as: 'blogPosts',
  });
 };
 return User;
};