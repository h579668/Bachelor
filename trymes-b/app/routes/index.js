let express = require('express');
let router = express.Router();

const activity = require("../controllers/activity.controller.js");
const category = require("../controllers/category.controller.js");

/* Activity Router */
router.post("/api/activity/", activity.create); //create
router.get("/api/activity/", activity.findAll); // Retrieve all activities
router.get("/api/activity/published", activity.findAllPublished); // Retrieve all published activities
router.get("/api/activity/:id", activity.findOne); // Retrieve a single Activity with id
router.put("/api/activity/:id", activity.update); // Update a Activity with id
router.delete("/api/activity/:id", activity.delete); // Delete a Activity with id
router.delete("/api/activity/", activity.deleteAll); // Delete all Activity

/* Category Router */
router.post("/api/category/", category.create); //create
router.get("/api/category/", category.findAll); // Retrieve all category
router.get("/api/category/published", category.findAllPublished); // Retrieve all published category
router.get("/api/category/:id", category.findOne); // Retrieve a single category with id
router.put("/api/category/:id", category.update); // Update a category with id
router.delete("/api/category/:id", category.delete); // Delete a category with id
router.delete("/api/category/", category.deleteAll); // Delete all category



module.exports = router;