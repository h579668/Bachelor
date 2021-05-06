'use strict';
/*
 * We dropped writing the "s" on the end of the table names
 * The "s" is added automatically when the table is being initialized
*/
module.exports = (sequelize, Sequelize) => {
    const User_Feature = sequelize.define("users_feature", {
      users_id: {
        type: Sequelize.INTEGER
      },
      features_id: {
        type: Sequelize.INTEGER
      },
      us_fe_value: { //users_features value
        type: Sequelize.INTEGER
      },
    });
  
    return User_Feature;
  };
