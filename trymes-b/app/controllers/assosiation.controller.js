const db = require("../models");
const Assosiation = db.assosiations;
const Op = db.Sequelize.Op;

// Create and Save a new Assosiation
exports.create = (req, res) => {
  // Validate request
  if (!req.body.ass_name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Assosiation
  const assosiation = {
    ass_name: req.body.ass_name,
    published: req.body.published ? req.body.published : false
  };

  // Save Assosiation in the database
  Assosiation.create(assosiation)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Assosiation."
      });
    });
};

// Retrieve all Assosiations from the database.
exports.findAll = (req, res) => {
    const ass_name = req.query.ass_name;
    var condition = ass_name ? { ass_name: { [Op.iLike]: `%${ass_name}%` } } : null;
  
    Assosiation.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Assosiations."
        });
      });
};

// Find an single Assosiation with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Assosiation.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Assosiation with id=" + id
        });
      });
};

// Update a Assosiation by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Assosiation.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Assosiation was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Assosiation with id=${id}. Maybe Assosiation was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Assosiation with id=" + id
        });
      });
};

// Delete a Assosiation with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Assosiation.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Assosiation was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Assosiation with id=${id}. Maybe Assosiation was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Assosiation with id=" + id
        });
      });
};

// Delete all Assosiations from the database.
exports.deleteAll = (req, res) => {
  Assosiation.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Assosiations were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Assosiations."
          });
        })
};

// Find all published Assosiations
exports.findAllPublished = (req, res) => {
  Assosiation.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Assosiations."
      });
    });
};
