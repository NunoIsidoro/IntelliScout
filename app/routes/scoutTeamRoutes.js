const express = require('express');
const route = express.Router();
const db = require("../models/db.js");
const team = require('../models/scoutTeamModel.js');



route.get('/', async function(req, res, next) {
  try {
    res.json(await team.getAll());
    res.status(200).send({mensagem: "Lista de equipas consultada com sucesso!"})
  } catch (err) {
    res.status(200).send({mensagem: "Problema no pedido!"})
    next(err);
  }
});

route.get('/:id', async function(req, res, next) {
  try {
    res.json(await team.getById(req.params.id));
    res.status(200).send({mensagem: "Equipa consultado com sucesso!"})
  } catch (err) {
    res.status(200).send({mensagem: "Problema no pedido!"})
    next(err);
  }
});

//Add a new equipment
route.post('/', async function(req, res, next) {

  const verifyName = await db.query(
    `select name_scout_team from scout_team where name_scout_team = ?`, [req.body.name]);
    try {

      res.json(await team.addTeam(req.body));
      res.status(200).send({mensagem: "Equipa adicionada com sucesso!"});

    } catch (err) {
      res.status(300).send({mensagem: "Problema no pedido!"})
      next(err);
    }
});

route.delete('/:id', async function(req, res, next) {
  try {
    res.json(await team.deleteTeam(req.params.id));
    res.status(200).send({mensagem: "Equipa eliminada com sucesso!"})
  } catch (err) {
    res.status(200).send({mensagem: "Problema no pedido!"})
    next(err);
  }
});

route.put('/', async function(req, res, next) {
  try {
    console.log(req.body);
    res.json(await team.editTeam(req.body));
    res.status(200).send({mensagem: "Equipa alterada com sucesso!"})
  } catch (err) {
    res.status(200).send({mensagem: "Problema no pedido!"})
    next(err);
  }
});

module.exports = route;
