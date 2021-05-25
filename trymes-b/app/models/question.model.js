'use strict';

/*
 * We dropped writing the "s" on the end of the table names
 * The "s" is added automatically when the table is being initialized
*/
module.exports = (sequelize, Sequelize) => {
    const Question= sequelize.define("question", {
      questions_id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      question_category: { 
        type: Sequelize.STRING
      },
      question: { 
        type: Sequelize.STRING
      },

    });

    return Question;
  };
