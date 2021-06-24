let express = require('express');
let router = express.Router();

const activity = require("../controllers/activity.controller.js");
const activity_features = require("../controllers/activity_features.controller.js");
const age = require("../controllers/age_interval.controller.js");
const area = require("../controllers/area.controller.js");
const association = require("../controllers/association.controller.js");
const category = require("../controllers/category.controller.js");
const feature = require("../controllers/feature.controller.js");

const question = require("../controllers/question.controller.js");
const questionCategory = require("../controllers/questionCategory.controller.js");

const user = require("../controllers/user.controller.js");
const users_features =require("../controllers/user_feature.controller.js");
const users_activities = require("../controllers/user_activity.controller.js");

//const { users_features } = require('../models/index.js');

/* Activity Router */
router.post("/activities/", activity.create); //create
router.get("/activities_associations/", activity.findAllAssociations); // Retrieve all activities with associations
//router.get("/activities/published", activity.findAllPublished); // Retrieve all published activities
router.get("/activities/:id", activity.findById); // Retrieve a single activity with id
//router.put("/activities/:id", activity.update); // Update an activity with id
//router.delete("/activities/:id", activity.delete); // Delete an activity with id
//router.delete("/actactivitiesvity/", activity.deleteAll); // Delete all activity

router.get("/activities_features/", activity.findAllFeatures); // Retrieve all activities with features

/* Age_Interval Router */
router.get("/age_intervals/", age.findAll); // Retrieve all ages

router.post("/areas/", area.create); // Retrieve all area
router.get("/areas/", area.findAll); // Retrieve all areas

/* Category Router */
//router.post("/categories/", category.create); //create
router.get("/categories/", category.findAll); // Retrieve all categories
//router.get("/categories/published", category.findAllPublished); // Retrieve all published category
router.get("/categories/:id", category.findCategoryById); // Retrieve a single category with id
//router.put("/categories/:id", category.update); // Update a category with id
//router.delete("/categories/:id", category.delete); // Delete a category with id
//router.delete("/categories/", category.deleteAll); // Delete all category

/* ActivityFeature Router */
//router.post("/features/", feature.create); //create
router.get("/activities_features/", feature.findAll); // Retrieve all feature
router.get("/features/:id", feature.findById); // Retrieve a single feature with id
router.put("/features/:id", feature.addActivity); // Update a feature with id
//router.delete("/features/:id", feature.delete); // Delete a feature with id
//router.delete("/features/", feature.deleteAll); // Delete all feature*/

router.post("/associations/", association.create);//create
router.put("/associations/:id", association.updateName); // Update an associations with id
router.get("/associations/", association.findAll); // Retrieve all associations
router.get("/associations/:id", association.findOne); // Retrieve a single association with id
router.delete("/associations/:id", association.delete); // Delete a feature with id


/* Feature Router */
//router.post("/features/", feature.create); //create
router.get("/features/", feature.findAll); // Retrieve all feature
//router.get("/features/published", feature.findAllPublished); // Retrieve all published feature
//router.get("/features/:id", feature.findOne); // Retrieve a single feature with id
//router.put("/features/:id", feature.update); // Update a feature with id
//router.delete("/features/:id", feature.delete); // Delete a feature with id
//router.delete("/features/", feature.deleteAll); // Delete all feature

router.get("/questions/", question.findAll);
router.get("/questionCategory/", questionCategory.findAll);

router.post("/users_features/", users_features.addFeature);

router.post("/users_activities/", users_activities.addActivity);
router.get("/users_activities/:id", users_activities.findOneUserAnswers);
//router.get("/users_activities/", users_activities.findAllUsersActivities);
//router.get("/users_activities/", users_activities.findUserActivitiesById);

//router.get("/users_features",users_features.findAllResults);

router.post("/users/", user.create);
router.get("/users/", user.findAll);




module.exports = router;