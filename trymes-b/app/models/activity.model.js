'use strict';
/*
 * We dropped writing the "s" on the end of the table names
 * The "s" is added automatically when the table is being initialized
*/
module.exports = (sequelize, Sequelize) => {
    const Activity = sequelize.define("activitie", {
      associations_id: {
        type: Sequelize.INTEGER
      },
      age_id: {
        type: Sequelize.INTEGER
      },
      act_name: {
        type: Sequelize.STRING
      },
      tel: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      comments: {
        type: Sequelize.STRING
      },
    });
  
    return Activity;
  };
