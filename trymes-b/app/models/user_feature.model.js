'use strict';
/*
 * We dropped writing the "s" on the end of the table names
 * The "s" is added automatically when the table is being initialized
*/
module.exports = (sequelize, Sequelize) => {
    const User_Feature = sequelize.define("users_feature", {
      user_feature_id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      users_features_values: {
        type: Sequelize.INTEGER
      },
    });
  
    return User_Feature;
  };
