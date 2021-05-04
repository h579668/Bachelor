'use strict';
/*
 * We dropped writing the "s" on the end of the table names
 * The "s" is added automatically when the table is being initialized
*/
module.exports = (sequelize, Sequelize) => {
    const Area = sequelize.define("area", {
      country: {
        type: Sequelize.STRING
      },
      municipality: {           //norwegian "kommune"
        type: Sequelize.STRING 
      },
      county: {             //norwegian "fylke"
        type: Sequelize.STRING
      },
    });
  
    return Area;
  };
