'use strict';
/*
 * We dropped writing the "s" on the end of the table names
 * The "s" is added automatically when the table is being initialized
*/
module.exports = (sequelize, Sequelize) => {
    const Feature= sequelize.define("activitie", {
      categories_id: {
        type: Sequelize.INTEGER
      },
      feat_name: { //Feature name
        type: Sequelize.String
      },
    });
  
    return Feature;
  };
