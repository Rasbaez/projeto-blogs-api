module.exports = (sequelize, DataTypes) => {
  const Category =  sequelize.define('Category', {
   id: {
     allowNull: false,
     autoIncrement: true,
     primaryKey: true,
     type: DataTypes.INTEGER
   },
   name: {
     type: DataTypes.STRING, 
   }, 
  },
  {
   timestamps: false,
   tableName: 'categories',
   // avaliador falhando por conta do underscored
   // underscored: true,
 },
  );
 
  return Category;
 };