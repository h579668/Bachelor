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
  });
  return Activity;
};