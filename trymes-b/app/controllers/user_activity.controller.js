const db = require("../models");
const User_Activity = db.users_activites;
const Op = db.Sequelize.Op;

// Create and Save a new User_Activity
exports.create = (req, res) => {
  // Validate request
  if (!req.body.score) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a User_Activity
  const user_activity = {
    score: req.body.score,
    hit: req.body.hit,
    relevant: req.body.relevant,
    strength:req.body.strength,
    published: req.body.published ? req.body.published : false
  };

  // Save User_Activity in the database
  User_Activity.create(user_activity)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User_Activity."
      });
    });
};

// Retrieve all User_Activity from the database.
exports.findAll = (req, res) => {
    const score= req.query.score;
    var condition = score? { score: { [Op.iLike]: `%${score}%` } } : null;
  
    User_Activity.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving User_Activity."
        });
      });
};

// Find an single User_Activity with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    User_Activity.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving User_Activity with id=" + id
        });
      });
};

// Update a User_Activity by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    User_Activity.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User_Activity was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update User_Activity with id=${id}. Maybe User_Activity was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating User_Activity with id=" + id
        });
      });
};

// Delete a User_Activity with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    User_Activity.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User_Activity was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete User_Activity with id=${id}. Maybe User_Activity was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete User_Activity with id=" + id
        });
      });
};

// Delete all Users_Activities from the database.
exports.deleteAll = (req, res) => {
  User_Activity.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Users_Activities were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Users_Activities."
          });
        })
};

// Find all published User_Activity
exports.findAllPublished = (req, res) => {
  User_Activity.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Users_Activities."
      });
    });
};
