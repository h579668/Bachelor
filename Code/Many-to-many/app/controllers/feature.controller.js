const db = require("../models");
const Activity = db.activity;
const Feature = db.feature;
const ActivityFeature = db.activities_features;


// Create and Save new Feature
exports.create = (feature) => {
  return Feature.create({
    features_name: feature.features_name,
  })
    .then((feature) => {
      console.log(">> Created Feature: " + JSON.stringify(feature, null, 2));
      return feature;
    })
    .catch((err) => {
      console.log(">> Error while creating Feature: ", err);
    });
};

  // Find a Feature for a given Feature id
exports.findById = (features_id) => {
    return Feature.findByPk(features_id, {
      include: [
        {
          model: Activity,
          as: "activities",
          attributes: ["activities_id", "activities_name"],
          through: {
            attributes: [],
          }
        },
      ],
    })
      .then((feature) => {
        return feature;
      })
      .catch((err) => {
        console.log(">> Error while finding Feature: ", err);
      });
  };
  
  // Get all Features
  exports.findAll = () => {
    return Feature.findAll({
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
      .then((features) => {
        return features;
      })
      .catch((err) => {
        console.log(">> Error while retrieving Features: ", err);
      });
  };

  //Add an Activity to a Feature
exports.addActivity = (features_id, activities_id, numbers) => {
    return Feature.findByPk(features_id)
      .then((feature) => {
        if (!feature) {
          console.log("Feature not found!");
          return null;
        }
        return Activity.findByPk(activities_id).then((activity) => {
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