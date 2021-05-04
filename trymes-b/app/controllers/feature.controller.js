const db = require("../models");
const Feature = db.features;
const Op = db.Sequelize.Op;

// Create and Save a new Feature
exports.create = (req, res) => {
  // Validate request
  if (!req.body.feat_name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Feature
  const feature = {
    categories_id: req.body.categories_id,
    feat_name: req.body.feat_name,
    published: req.body.published ? req.body.published : false
  };

  // Save Feature in the database
  Feature.create(feature)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the feature."
      });
    });
};

// Retrieve all Features from the database.
exports.findAll = (req, res) => {
    const feat_name = req.query.feat_name;
    var condition = feat_name ? { feat_name: { [Op.iLike]: `%${feat_name}%` } } : null;
  
    Feature.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Features."
        });
      });
};

// Find an single Feature with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Feature.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Feature with id=" + id
        });
      });
};

// Update a Feature by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Feature.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Feature was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Feature with id=${id}. Maybe Feature was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Feature with id=" + id
        });
      });
};

// Delete a Feature with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Feature.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Feature was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Feature with id=${id}. Maybe Feature was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Feature with id=" + id
        });
      });
};

// Delete all Features from the database.
exports.deleteAll = (req, res) => {
  Feature.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Features were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Features."
          });
        })
};

// Find all published Features
exports.findAllPublished = (req, res) => {
  Feature.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Features."
      });
    });
};