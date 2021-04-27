module.exports = (sequelize, Sequelize) => {
    const Activity = sequelize.define("activity", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Activity;
  };