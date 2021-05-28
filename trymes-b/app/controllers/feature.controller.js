const db = require("../models");
const Activity = db.activities;
const Feature = db.features;
const Activity_Feature = db.activities_features;

  // Create and Save new Feature
exports.create = (req,res) => {
  const features_name = req.body.features_name
    Feature.create({
      features_name: feature.features_name,
    })
      .then((data) => {
       // console.log(">> Created Feature: " + JSON.stringify(data, null, 2));
        //return feature;
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: 
            err.message || ">> Error while creating Feature: ", err
          
        })
       // console.log(">> Error while creating Feature: ", err);
      });
  };

  // Find a Feature for a given Feature id
exports.findById = (req,res) => {
  const id = req.params.features_id;
  
  Feature.findByPk(id, {
      include: [
        {
          model: Activity,
          as: "activities",
          attributes: ["activities_id", "activities_name"],
          through: {
            attributes: ["activities_features_values"],
          }
        },
      ],
    })
      .then(data => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error retrieving Feature with id=" + id
        })
       // console.log(">> Error while finding Feature: ", err);
      });
  };

  // Get all Features
  exports.findAll = (req, res) => {
    Feature.findAll({
      include: [
        {
          model: Activity,
          as: "activities",
          attributes: ["activities_id", "activities_name"],
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

  exports.findAllFeatures = () => {
    return Feature.findAll({
      include: [
        {
          model: Activity,
          as: "activities",
          attributes: ["activities_id", "activities_name"],
          through: {
            attributes: ["activities_features_values"],
          },
          // through: {
          //   attributes: ["tag_id", "activity_id"],
          // },
        },
      ],
    })
      .then((features) => {
        return features;
      })
      .catch((err) => {
        console.log(">> Error while retrieving activities: ", err);
      });
  };
  

  //Add an Activity to a Feature
exports.addActivity = (req,res) => {
  const features_id = req.params.features_id;
  const activities_id= req.params.activities_id;
  const numbers= req.body.numbers;

    Feature.findByPk(features_id)
      .then((feature) => {
        if (!feature) {
          console.log("Feature not found!");
          return null;
        }
        Activity.findByPk(activities_id).then((activity) => {
          if (!activity) {
            console.log("Activity not found!");
            return null;
          }
  
          feature.addActivity(activity, { 
            through: {
              activities_features_values:numbers
            }
          });
          console.log(`>> added Activity id=${activity.activities_id} to Feature id=${feature.features_id} where values equals=${numbers}`);
          return feature;
        });
      })
      .catch((err) => {
        console.log(">> Error while adding Activity to Feature: ", err);
      });
  };