const db = require("../models");
const Age = db.age_intervals;
const Op = db.Sequelize.Op;

// Create and Save a new Age
exports.create = (req, res) => {
  // Validate request
  if (!req.body.age) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create an Age
  const age = {
    age: req.body.age,
  };

  // Save Age in the database
  Age.create(age)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Age."
      });
    });
};

// Retrieve all Ages from the database.
exports.findAll = (req, res) => {
    const age = req.query.age;
    var condition = age ? { age: { [Op.iLike]: `%${age}%` } } : null;
  
    Age.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving ages."
        });
      });
};

// Find an single Age with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Age.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Age with id=" + id
        });
      });
};

// Update an Age by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Age.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Age was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Age with id=${id}. Maybe Age was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Age with id=" + id
        });
      });
};

// Delete an Age with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Age.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Age was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Age with id=${id}. Maybe Age was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Age with id=" + id
        });
      });
};

// Delete all Age from the database.
exports.deleteAll = (req, res) => {
    Age.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Ages were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all activities."
          });
        })
};

// Find all published Ages
exports.findAllPublished = (req, res) => {
    Age.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Ages."
      });
    });
};
