const express = require('express');
const route = express.Router();
const db = require("../models/db.js");
const activity = require('../models/activityTypeModel.js');



route.get('/', async function(req, res, next) {
  try {
    res.json(await activity.getAll());
    res.status(200).send({mensagem: "Lista de atividades consultada com sucesso!"})
  } catch (err) {
    res.status(200).send({mensagem: "Problema no pedido!"})
    next(err);
  }
});

route.get('/:id', async function(req, res, next) {
  try {
    res.json(await activity.getById(req.params.id));
    res.status(200).send({mensagem: "Atividade consultado com sucesso!"})
  } catch (err) {
    res.status(200).send({mensagem: "Problema no pedido!"})
    next(err);
  }
});

//Add a new equipment
route.post('/', async function(req, res, next) { //erro

  const verifyName = await db.query(
    `select name_activity_type from activity_type where name_activity_type = ?`, [req.body.name]);
    try {

      if(verifyName.length > 0){
        res.json({mensagem: "Atividade já está registada!"});
        return;
      }

      res.json(await activity.addActivityType(req.body));
      console.log("Atividade adicionada com sucesso!");

    } catch (err) {
      res.status(300).send({mensagem: "Problema no pedido!"})
      next(err);
    }
});

route.delete('/:id', async function(req, res, next) {
  try {
    res.json(await activity.deleteActivityType(req.params.id));
    res.status(200).send({mensagem: "Atividade eliminada com sucesso!"})
  } catch (err) {
    res.status(200).send({mensagem: "Problema no pedido!"})
    next(err);
  }
});

route.put('/', async function(req, res, next) {
  try {
    console.log(req.body);
    res.json(await activity.editActivityType(req.body));
    res.status(200).send({mensagem: "Atividade alterada com sucesso!"})
  } catch (err) {
    res.status(200).send({mensagem: "Problema no pedido!"})
    next(err);
  }
});


module.exports = route;
