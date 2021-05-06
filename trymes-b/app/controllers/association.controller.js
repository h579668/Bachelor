const db = require("../models");
const Association = db.associations;
const Op = db.Sequelize.Op;

// Create and Save a new Association
exports.create = (req, res) => {
  // Validate request
  if (!req.body.ass_name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Association
  const association = {
    ass_name: req.body.ass_name,
    published: req.body.published ? req.body.published : false
  };

  // Save Association in the database
  Association.create(association)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Association."
      });
    });
};

// Retrieve all Association from the database.
exports.findAll = (req, res) => {
    const ass_name = req.query.ass_name;
    var condition = ass_name ? { ass_name: { [Op.iLike]: `%${ass_name}%` } } : null;
  
    Association.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Association."
        });
      });
};

// Find an single Association with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Association.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Association with id=" + id
        });
      });
};

// Update a Association by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Association.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Association was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Association with id=${id}. Maybe Association was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Association with id=" + id
        });
      });
};

// Delete a Association with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Association.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Association was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Association with id=${id}. Maybe Association was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Association with id=" + id
        });
      });
};

// Delete all Association from the database.
exports.deleteAll = (req, res) => {
  Association.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Association were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Association."
          });
        })
};

// Find all published Association
exports.findAllPublished = (req, res) => {
  Association.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Association."
      });
    });
};
