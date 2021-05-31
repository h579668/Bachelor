const db = require("../models");
const QuestionCategory = db.questionCategory;
const Question = db.questions;
const Op = db.Sequelize.Op;

//TODO: create questions
//TODO: edit questions
//TODO: delete questions

//retrieving all questions
exports.findAll = (req, res) => {
  const questions_category_id = req.query.questions_category_id;
  var condition = questions_category_id ? { questions_category_id: { [Op.iLike]: `%${questions_category_id}%` } } : null;

  QuestionCategory.findAll({ 
    where: condition, 
    include: ["questions"],
    }).then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving QuestionCategory."
      });
    });
};