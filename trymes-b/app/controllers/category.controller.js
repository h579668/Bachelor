const db = require("../models");
const relation = require("../models/relations");
const Category = db.categories;
const Feature = db.features;
const Op = db.Sequelize.Op;

// Create and Save a new Category
exports.create = (req, res) => {
  // Validate request
  if (!req.body.categories_name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Category
  const category = {
    categories_name: req.body.categories_name,
  };

  // Save Category in the database
  Category.create(category)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Category."
      });
    });
};

// Retrieve all Categories from the database.

exports.findAll = (req, res) => {
  const categories_name = req.query.categories_name;
  var condition = categories_name ? { categories_name: { [Op.iLike]: `%${categories_name}%` } } : null;
  
  Category.findAll({
        
      }
      )
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Categories."
        });
      });
};

// Find an single Category with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Category.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Category with id=" + id
        });
      });
};

// Update a Category by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Category.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Category was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Category with id=${id}. Maybe Category was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Category with id=" + id
        });
      });
};

// Delete a Category with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Category.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Category was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Category with id=${id}. Maybe Category was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Category with id=" + id
        });
      });
};

// Delete all Categories from the database.
exports.deleteAll = (req, res) => {
  Category.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Categories were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Categories."
          });
        })
};

// Find all published Categories
exports.findAllPublished = (req, res) => {
  Category.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Categories."
      });
    });
};
