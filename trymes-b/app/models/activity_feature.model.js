'use strict';
/*
 * We dropped writing the "s" on the end of the table names
 * The "s" is added automatically when the table is being initialized
*/
module.exports = (sequelize, Sequelize) => {
    const Activity_Feature = sequelize.define("activities_feature", {
      activities_features_id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      activities_features_values: {          
        type: Sequelize.INTEGER
      },
    });
  
    return Activity_Feature;
  };
