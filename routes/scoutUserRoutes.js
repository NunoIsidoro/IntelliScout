const express = require('express');
const route = express.Router();
const scouts = require('../models/scoutUserModel.js');

/* GET all scouts on data base. */
route.get('/', async function(req, res, next) {
  try {
    res.json(await scouts.getAll(req.query.page));
  } catch (err) {
    console.error(`Erro ao tentar buscar os scouts `, err.message);
    next(err);
  }
});

route.get('/:id', async function(req, res, next) {
  try {
    res.json(await scouts.getById(req.params.id));
  } catch (err) {
    console.error('Erro ao procurar o scout', err.message);
    next(err);
  }
  });

module.exports = route;
