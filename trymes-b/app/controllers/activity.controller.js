const db = require("../models");
const Activity = db.activites;
const Op = db.Sequelize.Op;

// Create and Save a new Activity
exports.create = (req, res) => {
  // Validate request
  if (!req.body.act_name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create an Activity
  const activity = {
    score: req.body.name,
    tel: req.body.tel,
    email: req.body.email,
    act_name: req.body.act_name,
    comments: req.body.comments,
    published: req.body.published ? req.body.published : false
  };

  // Save Activity in the database
  Activity.create(activity)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Activity."
      });
    });
};

// Retrieve all Activities from the database.
exports.findAll = (req, res) => {
    const act_name = req.query.act_name;
    var condition = act_name ? { act_name: { [Op.iLike]: `%${act_name}%` } } : null;
  
    Activity.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving activities."
        });
      });
};

// Find an single Activity with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Activity.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Activity with id=" + id
        });
      });
};

// Update an Activity by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Activity.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Activity was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Activity with id=${id}. Maybe Activity was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Activity with id=" + id
        });
      });
};

// Delete an Activity with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Activity.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Activity was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Activity with id=${id}. Maybe Activity was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Activity with id=" + id
        });
      });
};

// Delete all Activities from the database.
exports.deleteAll = (req, res) => {
  Activity.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Activity were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all activities."
          });
        })
};

// Find all published Activities
exports.findAllPublished = (req, res) => {
  Activity.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving activities."
      });
    });
};
