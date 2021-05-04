const db = require("../models");
const User_Feature = db.users_features;
const Op = db.Sequelize.Op;

// Create and Save a new User_Feature
exports.create = (req, res) => {
  // Validate request
  if (!req.body.users_id) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a User_Feature
  const user_feature = {
    users_id: req.body.users_id,
    features_id: req.body.feature_id,
    us_fe_value: req.body.comments,
    published: req.body.published ? req.body.published : false
  };

  // Save User_Feature in the database
  User_Feature.create(user_feature)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User_Feature."
      });
    });
};

// Retrieve all User_Feature from the database.
exports.findAll = (req, res) => {
    const users_id = req.query.users_id;
    var condition = users_id ? { users_id: { [Op.iLike]: `%${users_id}%` } } : null;
  
    User_Feature.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving User_Feature."
        });
      });
};

// Find an single User_Feature with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    User_Feature.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving User_Feature with id=" + id
        });
      });
};

// Update a User_Feature by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    User_Feature.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User_Feature was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update User_Feature with id=${id}. Maybe User_Feature was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating User_Feature with id=" + id
        });
      });
};

// Delete a User_Feature with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    User_Feature.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User_Feature was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete User_Feature with id=${id}. Maybe User_Feature was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete User_Feature with id=" + id
        });
      });
};

// Delete all Users_Features from the database.
exports.deleteAll = (req, res) => {
  User_Feature.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Users_Features were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Users_Features."
          });
        })
};

// Find all published User_Feature
exports.findAllPublished = (req, res) => {
  User_Feature.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Users_Features."
      });
    });
};
