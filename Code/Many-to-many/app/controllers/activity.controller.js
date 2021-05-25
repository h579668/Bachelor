const db = require("../models");
const Activity = db.activity;
const Feature = db.feature;

// Create and Save new Activities
exports.create = (activity) => {
  return Activity.create({
    activities_name: activity.activities_name,
    telephone: activity.telephone,
    email:activity.email,
    activities_comments: activity.activities_comments,
  })
    .then((activity) => {
      console.log(">> Created activity: " + JSON.stringify(activity, null, 4));
      return activity;
    })
    .catch((err) => {
      console.log(">> Error while creating activity: ", err);
    });
};
//Retrieve all activities
exports.findAll = () => {
  return Activity.findAll({
    include: [
      {
        model: Feature,
        as: "features",
        attributes: ["features_id", "features_name"],
        through: {
          attributes: [],
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
//Get the activity for a given activity id
exports.findById = (activities_id) => {
  return Activity.findByPk(activities_id, {
    include: [
      {
        model: Feature,
        as: "features",
        attributes: ["features_id", "features_name"],
        through: {
          attributes: [],
        },
        // through: {
        //   attributes: ["tag_id", "activity_id"],
        // },
      },
    ],
  })
    .then((activity) => {
      return activity;
    })
    .catch((err) => {
      console.log(">> Error while finding activities: ", err);
    });
};



