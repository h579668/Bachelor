'use strict';

const categoryModel = require("./category.model");

/*
 * We dropped writing the "s" on the end of the table names
 * The "s" is added automatically when the table is being initialized
*/
module.exports = (sequelize, Sequelize) => {
    const Feature= sequelize.define("feature", {
      features_id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      features_name: { //Feature name
        type: Sequelize.STRING
      },
      categories_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "categories",
          key: 'categories_id'
        }
      }
    });
   /* Feature.associate = function(models){
      Feature.belongsToMany(User, { through: models.user_feature });
      Feature.belongsToMany(Activity,{ through: models.activity_feature });
      Feature.hasOne(models.category);
    }*/
  
    return Feature;
  };
