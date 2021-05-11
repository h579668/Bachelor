let express = require('express');
let router = express.Router();

const activity = require("../controllers/activity.controller.js");
const category = require("../controllers/category.controller.js");
const feature = require("../controllers/feature.controller.js");

/* Activity Router */
router.post("/activities/", activity.create); //create
router.get("/activities/", activity.findAll); // Retrieve all activities
router.get("/activities/published", activity.findAllPublished); // Retrieve all published activities
router.get("/activities/:id", activity.findOne); // Retrieve a single Activity with id
router.put("/activities/:id", activity.update); // Update a Activity with id
router.delete("/activities/:id", activity.delete); // Delete a Activity with id
router.delete("/actactivitiesvity/", activity.deleteAll); // Delete all Activity

/* Category Router */
router.post("/categories/", category.create); //create
router.get("/categories/", category.findAll); // Retrieve all category
router.get("/categories/published", category.findAllPublished); // Retrieve all published category
router.get("/categories/:id", category.findOne); // Retrieve a single category with id
router.put("/categories/:id", category.update); // Update a category with id
router.delete("/categories/:id", category.delete); // Delete a category with id
router.delete("/categories/", category.deleteAll); // Delete all category

/* Feature Router */
router.post("/features/", feature.create); //create
router.get("/features/", feature.findAll); // Retrieve all feature
router.get("/features/published", feature.findAllPublished); // Retrieve all published feature
router.get("/features/:id", feature.findOne); // Retrieve a single feature with id
router.put("/features/:id", feature.update); // Update a feature with id
router.delete("/features/:id", feature.delete); // Delete a feature with id
router.delete("/features/", feature.deleteAll); // Delete all feature



module.exports = router;