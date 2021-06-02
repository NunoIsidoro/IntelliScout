
module.exports = app => {
    const ScoutUser = require("../controllers/scout_user.controller.js");
  
    // Create a new scout
    app.post("/scout_user", ScoutUser.create);
  
    // Retrieve all scouts
    app.get("/scout_user", ScoutUser.getAll);
  
    // Retrieve a single scout with id_scout_user
    app.get("/scout_user/:id_scout_user", ScoutUser.findOne);
  
    // Update a scout with id_scout_user
    app.put("/scout_user/:id_scout_user", ScoutUser.update);
  
    // Delete a scout with id_scout_user
    app.delete("/scout_user/:id_scout_user", ScoutUser.delete);
  
    // Create a new scout
    app.delete("/scout_user", ScoutUser.deleteAll);
};