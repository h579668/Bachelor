'use strict';
/*
 * We dropped writing the "s" on the end of the table names
 * The "s" is added automatically when the table is being initialized
*/
module.exports = (sequelize, Sequelize) => {
    const Age_Intervals = sequelize.define("age_interval", {
      age: {
        type: Sequelize.STRING
      },
    });
    return Age_Intervals;
  };
