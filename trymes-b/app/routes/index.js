let express = require('express');
let router = express.Router();

const activity = require("../controllers/activity.controller.js");
const age = require("../controllers/age_interval.controller.js");
const category = require("../controllers/category.controller.js");
const feature = require("../controllers/feature.controller.js");
const association = require("../controllers/association.controller.js");

/* Activity Router */
router.post("/activities/", activity.create); //create
router.get("/activities/", activity.findAll); // Retrieve all activities
router.get("/activities/published", activity.findAllPublished); // Retrieve all published activities
router.get("/activities/:id", activity.findOne); // Retrieve a single activity with id
router.put("/activities/:id", activity.update); // Update an activity with id
router.delete("/activities/:id", activity.delete); // Delete an activity with id
router.delete("/actactivitiesvity/", activity.deleteAll); // Delete all activity

/* Age_Interval Router */
router.post("/age_intervals/", age.create); //create
router.get("/age_intervals/", age.findAll); // Retrieve all ages
router.get("/age_intervals/published", age.findAllPublished); // Retrieve all published age
router.get("/age_intervals/:id", age.findOne); // Retrieve a single age with id
router.put("/age_intervals/:id", age.update); // Update an age with id
router.delete("/age_intervals/:id", age.delete); // Delete an age with id
router.delete("/age_intervals/", age.deleteAll); // Delete all ages

/* Category Router */
//router.post("/categories/", category.create); //create
router.get("/categories/", category.findAll); // Retrieve all categories
//router.get("/categories/published", category.findAllPublished); // Retrieve all published category
//router.get("/categories/:id", category.findOne); // Retrieve a single category with id
//router.put("/categories/:id", category.update); // Update a category with id
//router.delete("/categories/:id", category.delete); // Delete a category with id
//router.delete("/categories/", category.deleteAll); // Delete all category

/* ActivityFeature Router */
//router.post("/features/", feature.create); //create
router.get("/activities_features/", feature.findAll); // Retrieve all feature
/*router.get("/features/published", feature.findAllPublished); // Retrieve all published feature
router.get("/features/:id", feature.findOne); // Retrieve a single feature with id
router.put("/features/:id", feature.update); // Update a feature with id
router.delete("/features/:id", feature.delete); // Delete a feature with id
router.delete("/features/", feature.deleteAll); // Delete all feature*/

router.get("/associations/", association.findAll);

/* Feature Router */
router.post("/features/", feature.create); //create
router.get("/features/", feature.findAll); // Retrieve all feature
router.get("/features/published", feature.findAllPublished); // Retrieve all published feature
router.get("/features/:id", feature.findOne); // Retrieve a single feature with id
router.put("/features/:id", feature.update); // Update a feature with id
router.delete("/features/:id", feature.delete); // Delete a feature with id
router.delete("/features/", feature.deleteAll); // Delete all feature




module.exports = router;