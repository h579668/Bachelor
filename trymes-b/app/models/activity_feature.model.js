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
      ac_fe_value: {            //activities_features_value
        type: Sequelize.INTEGER
      },
    });
  
    return Activity_Feature;
  };
