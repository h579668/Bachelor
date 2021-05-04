const db = require("../models");
const Activity_Feature = db.activities_features;
const Op = db.Sequelize.Op;

// Create and Save a new Activity_Feature
exports.create = (req, res) => {
  // Validate request
  if (!req.body.activites_id) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create an Activity_Feature
  const activity_feature = {
    activites_id: req.body.activites_id,
    features_id: req.body.features_id,
    ac_fe_value: req.body.ac_fe_value,
    published: req.body.published ? req.body.published : false
  };

  // Save Activity_Feature in the database
  Activity_Feature.create(activity_feature)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Activity_Feature."
      });
    });
};

// Retrieve all Activities_Features from the database.
exports.findAll = (req, res) => {
    const activites_id = req.query.activites_id;
    var condition = activites_id ? { activites_id: { [Op.iLike]: `%${activites_id}%` } } : null;
  
    Activity_Feature.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving activities_features."
        });
      });
};

// Find an single Activity_Feature with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Activity_Feature.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Activity_Feature with id=" + id
        });
      });
};

// Update an Activity_Feature by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Activity_Feature.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Activity_Feature was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Activity_Feature with id=${id}. Maybe Activity_Feature was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Activity_Feature with id=" + id
        });
      });
};

// Delete an Activity_Feature with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Activity_Feature.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Activity_Feature was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Activity_Feature with id=${id}. Maybe Activity_Feature was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Activity_Feature with id=" + id
        });
      });
};

// Delete all Activity_Feature from the database.
exports.deleteAll = (req, res) => {
    Activity_Feature.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Activities_Features were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all activities."
          });
        })
};

// Find all published Activities_Features
exports.findAllPublished = (req, res) => {
    Activity_Feature.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving activities_features."
      });
    });
};
