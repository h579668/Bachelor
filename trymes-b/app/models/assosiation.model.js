'use strict';
/*
 * We dropped writing the "s" on the end of the table names
 * The "s" is added automatically when the table is being initialized
*/
module.exports = (sequelize, Sequelize) => {
    const Assosiation = sequelize.define("assosiation", {
      ass_name: {
        type: Sequelize.STRING
      },
    });
  
    return Assosiation;
  };
