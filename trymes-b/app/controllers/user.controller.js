const { response } = require("express");
const { sequelize } = require("../models");
const db = require("../models");
const User = db.users;
const Feature = db.features;
const Area = db.areas;
const Age = db.age_intervals;
const Op = db.Sequelize.Op;

// Create and Save a new User
exports.create = (req, res) => {

  let data={
    areas_id : req.body.areas_id,
    age_id : req.body.age_id
  }
  console.log("DATABASEN " + JSON.stringify(data, null, 4))
  // Save User in the database
  User.create(
   data
  )
    .then(data => {
     // console.log(data.areas_id)
      console.log(">> Created user: " + JSON.stringify(data, null, 4));
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
exports.findOneUserAnswersById = (users_id) => {
  return User.findByPk(users_id ,{
    include: [
      {
        model: Feature,
        as: "features",
        attributes: ["features_id", "features_name"],
        through: {
          attributes: ["users_features_values"],
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
          attributes: ["users_features_values"],
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
// Create and Save new Users (ONLY FOR BACKEND TESTING)
exports.createUser = (age_id,areas_id) => {
  return User.create({ 
    age_id: age_id,
    areas_id: areas_id,
  })
    .then((user) => {
        console.log(">> Created user: " + JSON.stringify(user, null, 4));
        return user;
   })
    .catch((err) => {
       console.log(">> Error while creating user: ", err);
  });
};


exports.findUserById = (users_Id) => {
  return User.findByPk(users_Id, { 
    include:[{ 
      model: Area,
      as:"areas",
      attributes: ["areas_id"]
    }, 
    { 
      model: Age,
      attributes:["age_id"]
    }] 
  })
    .then((user) => {
      return user;
    })
    .catch((err) => {
      console.log(">> Error while finding user: ", err);
    });
};