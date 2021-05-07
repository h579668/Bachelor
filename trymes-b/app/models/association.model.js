'use strict';
/*
 * We dropped writing the "s" on the end of the table names
 * The "s" is added automatically when the table is being initialized
*/
module.exports = (sequelize, Sequelize) => {
    const Association = sequelize.define("association", {
      ass_name: {
        type: Sequelize.STRING
      },
    });
  
    /*Association.associate = function(models){
      Association.belongsTo(models.user);
      Association.belongsToMany(models.activity);
    }*/
    return Association;
  };
