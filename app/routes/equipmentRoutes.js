const express = require('express');
const route = express.Router();
const db = require("../models/db.js");
const equipament = require('../models/equipmentModel.js');



route.get('/', async function(req, res, next) {
  try {
    res.json(await equipament.getAll());
    res.status(200).send({mensagem: "Lista de equipamentos pedida com sucesso!"})
  } catch (err) {
    res.status(200).send({mensagem: "Problema no pedido!"})
    next(err);
  }
});

route.get('/:id', async function(req, res, next) {
  try {
    res.json(await equipament.getById(req.params.id));
    res.status(200).send({mensagem: "Equipamento consultado com sucesso!"})
  } catch (err) {
    res.status(200).send({mensagem: "Problema no pedido!"})
    next(err);
  }
});

//Add a new equipment
route.post('/', async function(req, res, next) { 
  const verifyName = await db.query(
    `select name_equipment from equipment where name_equipment = ?`, [req.body.name]);
    try {

      if(verifyName.length > 0){
        res.json({mensagem: "Equipamento já está registado!"});
        res.json({auth: false});
        return;
      }else{

        res.json(await equipament.addEquipament(req.body));
        console.log("Equipamento adicionado com sucesso!");
        res.json({auth: true});

      }
      
    } catch (err) {
      res.status(300).send({mensagem: "Problema no pedido!"})
      next(err);
    }
});

route.delete('/:id', async function(req, res, next) {
  try {
    res.json(await equipament.deleteEquipament(req.params.id));
    res.status(200).send({mensagem: "Equipamento eliminado com sucesso!"})
  } catch (err) {
    res.status(200).send({mensagem: "Problema no pedido!"})
    next(err);
  }
});

route.put('/', async function(req, res, next) {
  try {
    console.log(req.body);
    res.json(await equipament.editEquipment(req.body));
    res.status(200).send({mensagem: "Equipamento alterado com sucesso!"})
  } catch (err) {
    res.status(200).send({mensagem: "Problema no pedido!"})
    next(err);
  }
});


module.exports = route;