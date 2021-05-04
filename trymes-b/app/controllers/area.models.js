const { regexp } = require("sequelize/types/lib/operators");
const db = require("../models");
const Area = db.areas;
const Op = db.Sequelize.Op;

// Create and Save a new Age
exports.create = (req, res) => {
  // Validate request
  if (!req.body.country) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create an Age
  const area = {
    country: req.body.country,
    municipality: req.body.municipality,
    county: req.body.county,
    published: req.body.published ? req.body.published : false
  };

  // Save Age in the database
  Area.create(area)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the area."
      });
    });
};

// Retrieve all Areas from the database.
exports.findAll = (req, res) => {
    const county = req.query.county;
    var condition = county ? { county: { [Op.iLike]: `%${county}%` } } : null;
  
    county.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving areas."
        });
      });
};

// Find an single Area with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Area.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Area with id=" + id
        });
      });
};

// Update an Area by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Area.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Area was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update v with id=${id}. Maybe Area was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating v with id=" + id
        });
      });
};

// Delete an Area with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Area.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Area was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Area with id=${id}. Maybe Area was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Area with id=" + id
        });
      });
};

// Delete all Area from the database.
exports.deleteAll = (req, res) => {
    Area.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Areas were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all activities."
          });
        })
};

// Find all published Areas
exports.findAllPublished = (req, res) => {
    Area.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Areas."
      });
    });
};