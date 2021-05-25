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
      activities_name: {
        type: Sequelize.STRING
      },
      telephone: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      activities_comments: {
        type: Sequelize.STRING
      },
      individual: {
        type: Sequelize.INTEGER
      }
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
