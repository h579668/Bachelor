'use strict';
/*
 * We dropped writing the "s" on the end of the table names
 * The "s" is added automatically when the table is being initialized
*/
module.exports = (sequelize, Sequelize) => {
    const Users_Activities = sequelize.define("users_activitie", {
      users_id: {
        type: Sequelize.INTEGER
      },
      activities_id: {
        type: Sequelize.INTEGER
      },
      score: {
        type: Sequelize.INTEGER
      },
      hit: {
        type: Sequelize.INTEGER
      },
      relevant: {
        type: Sequelize.INTEGER
      },
      comments: {
        type: Sequelize.STRING
      },
    });
  
    return Users_Activities;
  };