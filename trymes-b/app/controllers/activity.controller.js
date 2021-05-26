const db = require("../models");
const Activity = db.activities;
const Feature = db.features;
const Op = db.Sequelize.Op;

//Create and Save a new Activity
exports.create = (req, res) => {
  // Validate request
  if (!req.body.activities_name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create an Activity
  const activity = {
    activities_name: req.body.activities_name,
    telephone: req.body.telephone,
    email: req.body.email,
    activities_comments: req.body.activities_comments,
  };
  const age ={
    age_values: req.body.age_values
  };
  const association ={
    associations_name: req.body.associations
  };

  // Save Activity in the database
  Activity.create(activity)
    //.then((activity) => { activity.add(age) })
    //.then((activity)=> { activity.add(association) })
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

//Retrieve all activities
 // Get all Features
 exports.findAll = (req, res) => {
  const activities_name = req.query.activities_name;
  var condition = activities_name ? { activities_name: { [Op.iLike]: `%${activities_name}%` } } : null;
  Activity.findAll({
    condition,
    order: [['activities_name', 'ASC']],
    include: [
      {
        model: Feature,
        as: "features",
        attributes: ["features_id", "features_name"],
        through: {
          attributes: ["activities_features_values"],
        },
      },
    ],
  
  })
    .then(data => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error retrieving all Features"
      })
      //console.log(">> Error while retrieving Features: ", err);
    });
};

//Get the activity for a given activity id
exports.findById = (req,res) => {
  const activities_id = req.params.activities_id;
  Activity.findByPk(activities_id, {
    include: [
      {
        model: Feature,
        as: "features",
        attributes: ["features_id", "features_name"],
        through: {
          attributes: ["activities_features_values"],
        },
        // through: {
        //   attributes: ["tag_id", "activity_id"],
        // },
      },
    ],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
        err.message || ">> Error while finding activities"
       })
      //console.log(">> Error while finding activities: ", err);
    });
};

exports.addFeature = (req,res) => {
  const features_id = req.params.features_id;
  const activities_id= req.params.activities_id;
  const numbers= req.body.numbers;

    Activity.findByPk(activities_id)
      .then((activity) => {
        if (!activity) {
          console.log("Activity not found!");
          return null;
        }
        Feature.findByPk(features_id).then((feature) => {
          if (!feature) {
            console.log("Feature not found!");
            return null;
          }
  
          activity.addFeature(feature, { 
            through: {
              activities_features_values:numbers
            }
          });
          console.log(`>> added Feature id=${feature.features_id} to Activity id=${activity.activities_id} where values equals=${numbers}`);
          return feature;
        });
      })
      .catch((err) => {
        console.log(">> Error while adding Activity to Feature: ", err);
      });
  };

  //Retrieve all activities
exports.findAllActivities = () => {
  return Activity.findAll({
    include: [
      {
        model: Feature,
        as: "features",
        attributes: ["features_id", "features_name"],
        through: {
          attributes: ["activities_features_values"],
        },
        // through: {
        //   attributes: ["tag_id", "activity_id"],
        // },
      },
    ],
  })
    .then((activities) => {
      return activities;
    })
    .catch((err) => {
      console.log(">> Error while retrieving activities: ", err);
    });
};
//------------------------------------------

/* Retrieve all Activities from the database.
exports.findAll = (req, res) => {
    const activities_name = req.query.activities_name;
    var condition = activities_name ? { activities_name: { [Op.iLike]: `%${activities_name}%` } } : null;
  
    Activity.findAll({ where: condition })
   //    .then((activities_associations) => activities_associations.getAssociations())
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
          message: 
          err.message || "Error retrieving Activity with id=" + id
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
          messag:
          err.message || "Error updating Activity with id=" + id
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
*/