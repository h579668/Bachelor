let express = require('express');
let router = express.Router();

const activity = require("../controllers/activity.controller.js");
const category = require("../controllers/category.controller.js");

/* Activity Router */
router.post("/activities/", activity.create); //create
router.get("/activities/", activity.findAll); // Retrieve all activities
router.get("/activities/published", activity.findAllPublished); // Retrieve all published activities
router.get("/activities/:id", activity.findOne); // Retrieve a single Activity with id
router.put("/activities/:id", activity.update); // Update a Activity with id
router.delete("/actactivitiesivity/:id", activity.delete); // Delete a Activity with id
router.delete("/activities/", activity.deleteAll); // Delete all Activity

/* Category Router */
router.post("/categories/", category.create); //create
router.get("/categories/", category.findAll); // Retrieve all category
router.get("/categories/published", category.findAllPublished); // Retrieve all published category
router.get("/catecategoriesgory/:id", category.findOne); // Retrieve a single category with id
router.put("/categories/:id", category.update); // Update a category with id
router.delete("/categories/:id", category.delete); // Delete a category with id
router.delete("/categories/", category.deleteAll); // Delete all category



module.exports = router;