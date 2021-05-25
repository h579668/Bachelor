const db = require("../models");
const Question = db.questions;
const Op = db.Sequelize.Op;

//TODO: create questions
//TODO: edit questions
//TODO: delete questions

//retrieving all questions
exports.findAll = (req, res) => {
    const questions_id = req.query.questions_id;
    var condition = questions_id ? { questions_id: { [Op.iLike]: `%${questions_id}%` } } : null;
  
    Question.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Question."
        });
      });
};