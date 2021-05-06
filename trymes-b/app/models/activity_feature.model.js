'use strict';
/*
 * We dropped writing the "s" on the end of the table names
 * The "s" is added automatically when the table is being initialized
*/
module.exports = (sequelize, Sequelize) => {
    const Activity_Feature = sequelize.define("activites_feature", {
      ac_fe_value: {            //activites_features_value
        type: Sequelize.INTEGER
      },
    });
  
    return Activity_Feature;
  };
