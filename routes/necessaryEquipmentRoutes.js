const e = require('express');
const express = require('express');
const route = express.Router();
const db = require("../models/db.js");
const equipment = require('../models/necessaryEquipmentModel.js');



route.get('/', async function(req, res, next) {
  try {
    res.json(await equipment.getAll());
    res.status(200).send({mensagem: "Lista de participações consultada com sucesso!"})
  } catch (err) {
    res.status(200).send({mensagem: "Problema no pedido!"})
    next(err);
  }
});

route.get('/:id_activity/:id_equipment', async function(req, res, next) {
  try {
    res.json(await equipment.getById(req.params.id_activity, req.params.id_equipment));
    res.status(200).send({mensagem: "Equipamento consultado com sucesso!"})
  } catch (err) {
    res.status(200).send({mensagem: "Problema no pedido!"})
    next(err);
  }
});

route.post('/', async function(req, res, next) { //erro

    try {

      res.json(await equipment.addEquipment(req.body));
      res.status(200).send({mensagem: "Equipamento adicionado com sucesso!"})

    } catch (err) {
      res.status(300).send({mensagem: "Problema no pedido!"})
      next(err);
    }
});

route.delete('/:id_activity/:id_equipment', async function(req, res, next) { //erro
  try {
    res.json(await equipment.deleteEquipment(req.params.id_activity, req.params.id_equipment));
    res.status(200).send({mensagem: "Equipamento eliminado com sucesso!"})
  } catch (err) {
    res.status(200).send({mensagem: "Problema no pedido!"})
    next(err);
  }
});

route.put('/', async function(req, res, next) { //erro
  try {
    res.json(await equipment.editEquipment(req.body));
    res.status(200).send({mensagem: "Equipamento alterado com sucesso!"})
  } catch (err) {
    res.status(200).send({mensagem: "Problema no pedido!"})
    next(err);
  }
});


module.exports = route;
