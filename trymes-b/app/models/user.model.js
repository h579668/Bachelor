'use strict';
/*
 * We dropped writing the "s" on the end of the table names
 * The "s" is added automatically when the table is being initialized
*/
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      age_id: {
        type: Sequelize.INTEGER
      },
      areas_id: {
        type: Sequelize.INTEGER
      },
    });
  
    return User;
  };
