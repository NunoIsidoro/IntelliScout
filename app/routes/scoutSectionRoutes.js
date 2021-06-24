const express = require('express');
const route = express.Router();
const db = require("../models/db.js");
const section = require('../models/scoutSectionModel.js');



route.get('/', async function(req, res, next) {
  try {
    res.json(await section.getAll());
    res.status(200).send({mensagem: "Lista de Secções consultada com sucesso!"})
  } catch (err) {
    res.status(200).send({mensagem: "Problema no pedido!"})
    next(err);
  }
});

route.get('/:id', async function(req, res, next) {
  try {
    res.json(await section.getById(req.params.id));
    res.status(200).send({mensagem: "Secção consultado com sucesso!"})
  } catch (err) {
    res.status(200).send({mensagem: "Problema no pedido!"})
    next(err);
  }
});




module.exports = route;
