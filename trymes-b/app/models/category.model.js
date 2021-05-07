'use strict';
/*
 * We dropped writing the "s" on the end of the table names
 * The "s" is added automatically when the table is being initialized
*/
module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define("categorie", {
      categories_id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cat_name: {
        type: Sequelize.STRING
      },
    });
 /* Category.associate = function(models){
    Category.belongsToMany(models.feature);
  };*/
    return Category;
  };
