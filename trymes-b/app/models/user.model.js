'use strict';
/*
 * We dropped writing the "s" on the end of the table names
 * The "s" is added automatically when the table is being initialized
*/
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {});

    User.associate = function (models){
      User.belongsToMany(models.association);
      User.hasOne(models.age_interval);
      User.belongsToMany(models.area);
      User.belongsToMany(models.activity, { through: models.user_activity });
      User.belongsToMany(models.feature, { through: models.user_feature });
    }

    return User;
  };
