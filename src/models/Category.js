module.exports = (sequelize, DataTypes) => {
  const Category =  sequelize.define('Category', {
   id: {
     allowNull: false,
     autoIncrement: true,
     primaryKey: true,
     type: DataTypes.INTEGER
   },
   name: {
     allowNull: false,
     type: DataTypes.STRING, 
   }, 
  },
  {
   timestamps: false,
   // avaliador falhando por conta do underscored
   // underscored: true,
 },
  );
 
  return Category;
 };