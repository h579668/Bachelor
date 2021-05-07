'use strict';

/*
 * We dropped writing the "s" on the end of the table names
 * The "s" is added automatically when the table is being initialized
*/
module.exports = (sequelize, Sequelize) => {
    const Activity = sequelize.define("activitie", {
      activities_id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
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
      act_comments: {
        type: Sequelize.STRING
      },
    });
  /*
    Activity.associate = function(models){
      Activity.belongsToMany(models.user, { through: models.user_activity });
      Activity.belongsToMany(models.feature,{ through: models.activity_feature });
      Activity.belongsToMany(models.age);
      Activity.hasOne(models.association);
    }
    */
    return Activity;
  };
