const { regexp } = require("sequelize/types/lib/operators");
const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body.areas_id) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a User
  const user = {
    area : req.body.area,
    age : req.body.age
  };

  // Save User in the database
  User.create(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    });
};

// Retrieve all User from the database.
exports.findAll = (req, res) => {
    const areas_id = req.query.areas_id;
    var condition = areas_id ? { areas_id: { [Op.iLike]: `%${areas_id}%` } } : null;
  
    User.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving User."
        });
      });
};

// Find an single User with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    User.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving User with id=" + id
        });
      });
};

// Update a User by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    User.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating User with id=" + id
        });
      });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    User.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete User with id=${id}. Maybe User was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete User with id=" + id
        });
      });
};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
  User.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Users were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Users."
          });
        })
};
//Find on specific user and the user´s answers
exports.findOneUserAnswers = () => {
  
  return User.findOne({
    include: [
      {
        model: Feature,
        as: "features",
        attributes: ["features_id", "features_name"],
        through: {
          attributes: [],
        },
      },
    ],
  })
    .then((user) => {
      return user;
    })
    .catch((err) => {
      console.log(">> Error while retrieving the user : ", err);
    });
};

// Find all Users answers
exports.findAllUsersAnswers = () => {
  return User.findAll({
    include: [
      {
        model: Feature,
        as: "features",
        attributes: ["features_id", "features_name"],
        through: {
          attributes: [],
        },
      },
    ],
  })
    .then((users) => {
      return users;
    })
    .catch((err) => {
      console.log(">> Error while retrieving users: ", err);
    });
};
