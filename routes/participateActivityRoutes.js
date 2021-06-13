const express = require('express');
const route = express.Router();
const db = require("../models/db.js");
const participate = require('../models/participateActivityModel.js');



route.get('/', async function(req, res, next) {
  try {
    res.json(await participate.getAll());
    res.status(200).send({mensagem: "Lista de participações consultada com sucesso!"})
  } catch (err) {
    res.status(200).send({mensagem: "Problema no pedido!"})
    next(err);
  }
});

route.get('/:id_user/:id_activity', async function(req, res, next) {
  try {
    res.json(await participate.getById(req.params.id_user, req.params.id_activity));
    res.status(200).send({mensagem: "Atividade consultado com sucesso!"})
  } catch (err) {
    res.status(200).send({mensagem: "Problema no pedido!"})
    next(err);
  }
});

//Add a new equipment
route.post('/', async function(req, res, next) { //erro

    try {

      res.json(await participate.addParticipation(req.body));
      res.status(200).send({mensagem: "Participação adicionada com sucesso!"})

    } catch (err) {
      res.status(300).send({mensagem: "Problema no pedido!"})
      next(err);
    }
});

route.delete('/:id_user/:id_activity', async function(req, res, next) { //erro
  try {
    res.json(await participate.deleteParticipation(req.params.id_user, req.params.id_activity));
    res.status(200).send({mensagem: "Participação eliminada com sucesso!"})
  } catch (err) {
    res.status(200).send({mensagem: "Problema no pedido!"})
    next(err);
  }
});

route.put('/', async function(req, res, next) { //erro
  try {
    res.json(await participate.editParticipation(req.body));
    res.status(200).send({mensagem: "Participação alterada com sucesso!"})
  } catch (err) {
    res.status(200).send({mensagem: "Problema no pedido!"})
    next(err);
  }
});


module.exports = route;
