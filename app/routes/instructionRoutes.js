const express = require('express');
const route = express.Router();
const db = require("../models/db.js");
const instruction = require('../models/instructionModel.js');



route.get('/', async function(req, res, next) {
  try {
    res.json(await instruction.getAll());
    res.status(200).send({mensagem: "Lista de equipamentos pedida com sucesso!"})
  } catch (err) {
    res.status(200).send({mensagem: "Problema no pedido!"})
    next(err);
  }
});

route.get('/:id', async function(req, res, next) {
  try {
    res.json(await instruction.getById(req.params.id));
    res.status(200).send({mensagem: "Equipamento consultado com sucesso!"})
  } catch (err) {
    res.status(200).send({mensagem: "Problema no pedido!"})
    next(err);
  }
});

route.post('/', async function(req, res, next) {
  try {
    res.json(await instruction.addInstruction(req.body));
    console.log("Instrução adicionado com sucesso!");
  } catch (err) {
    res.status(300).send({mensagem: "Problema no pedido!"})
    next(err);
  }
});

route.delete('/:id', async function(req, res, next) {
  try {
    res.json(await instruction.deleteInstruction(req.params.id));
    res.status(200).send({mensagem: "Instrução eliminado com sucesso!"})
  } catch (err) {
    res.status(200).send({mensagem: "Problema no pedido!"})
    next(err);
  }
});

route.put('/', async function(req, res, next) {
  try {
    console.log(req.body);
    res.json(await instruction.editInstruction(req.body));
    res.status(200).send({mensagem: "Instrução alterado com sucesso!"})
  } catch (err) {
    res.status(200).send({mensagem: "Problema no pedido!"})
    next(err);
  }
});


module.exports = route;