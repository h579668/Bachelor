'use strict';
/*
 * We dropped writing the "s" on the end of the table names
 * The "s" is added automatically when the table is being initialized
*/
module.exports = (sequelize, Sequelize) => {
    const Age_Interval = sequelize.define("age_interval", {
      age: {
        type: Sequelize.STRING
      },
    });
    Age_Interval.associate=function(models){
      Age_Interval.belongsToMany(models.activity);
      Age_Interval.belongsToMany(models.user);

    }

    return Age_Interval;
  };
