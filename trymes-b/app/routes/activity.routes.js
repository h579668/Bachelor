module.exports = app => {
    const activities = require("../controllers/activity.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Activity
    router.post("/", activities.create);
  
    // Retrieve all activities
    router.get("/", activities.findAll);
  
    // Retrieve all published activities
    router.get("/published", activities.findAllPublished);
  
    // Retrieve a single Activity with id
    router.get("/:id", activities.findOne);
  
    // Update a Activity with id
    router.put("/:id", activities.update);
  
    // Delete a Activity with id
    router.delete("/:id", activities.delete);
  
    // Delete all Activity
    router.delete("/", activities.deleteAll);
  
    app.use('/api/activities', router);
  };