module.exports = (sequelize, Sequelize) => {
  const Feature= sequelize.define("feature", {
    features_id:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    features_name: { //Feature name
      type: Sequelize.STRING
    },
  });

  return Feature;
};