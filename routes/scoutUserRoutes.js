const express = require('express');
const router = express.Router();
const scouts = require('../models/scoutUserModel.js');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await scouts.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Erro ao tentar buscar os scouts `, err.message);
    next(err);
  }
});

module.exports = router;