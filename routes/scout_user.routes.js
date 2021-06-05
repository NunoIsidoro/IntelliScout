/*
const express = require('express');


module.exports = app => {
    const ScoutUser = require("../controllers/scout_user.controller.js");
  
    // Create a new scout
    //app.post("/scout_user", ScoutUser.create);
  
    // Retrieve all scouts
    app.get("/", getMultiple);
  
    // Retrieve a single scout with id_scout_user
    //app.get("/scout_user/:id_scout_user", ScoutUser.findOne);
  
    // Update a scout with id_scout_user
    //app.put("/scout_user/:id_scout_user", ScoutUser.update);
  
    // Delete a scout with id_scout_user
    //app.delete("/scout_user/:id_scout_user", ScoutUser.delete);
  
    // Create a new scout
    //app.delete("/scout_user", ScoutUser.deleteAll);
};
*/

const express = require('express');
const router = express.Router();
const scoutApi = require('../models/scout_user.model.js');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await scoutApi.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Erro ao tentar buscar scoutAPI `, err.message);
    next(err);
  }
});

module.exports = router;