'use strict';
/*
 * We dropped writing the "s" on the end of the table names
 * The "s" is added automatically when the table is being initialized
*/
module.exports = (sequelize, Sequelize) => {
    const Users_Activities = sequelize.define("users_activitie", {
     /* user_activities_id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },*/
      score: {
        type: Sequelize.INTEGER
      },
      hit: {
        type: Sequelize.STRING
      },
      relevant: {
        type: Sequelize.INTEGER
      },
      strength: {
        type: Sequelize.INTEGER
      },
    });
  
    return Users_Activities;
  };
