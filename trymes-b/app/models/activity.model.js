module.exports = (sequelize, Sequelize) => {
    const Activity = sequelize.define("activite", {
      forbund_id: {
        type: Sequelize.INTEGER
      },
      alder_id: {
        type: Sequelize.INTEGER
      },
      navn: {
        type: Sequelize.STRING
      },
      tlf: {
        type: Sequelize.STRING
      },
      epost: {
        type: Sequelize.STRING
      },
      kommentar: {
        type: Sequelize.STRING
      },
    });
  
    return Activity;
  };
