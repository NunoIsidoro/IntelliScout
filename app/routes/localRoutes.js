const express = require('express');
const route = express.Router();
const db = require("../models/db.js");
const local = require('../models/localModel.js');



route.get('/', async function(req, res, next) {
  try {
    res.json(await local.getAllLocal(req.query.page));
  } catch (err) {
    console.error(`*** Erro: ***\n Não consegue encontrar os distritos.\n`, err.message);
    res.json([{
      'title': 'Pedimos desculpa, não conseguimos encontrar os distritos:( ...'
    },
    {
      'message': err.message
    }
  ]);

    next(err);
  }
});

route.get('/:id', async function(req, res, next) {
  try {
    res.json(await local.getById(req.params.id));
    res.status(200).send({mensagem: "Distrito consultado com sucesso!"})
  } catch (err) {
    res.status(200).send({mensagem: "Problema no pedido!"})
    next(err);
  }
});

//Add a new equipment
route.post('/', async function(req, res, next) { 

  const verifyDistrict = await db.query(
    `select district_local from locality where district_local = ?`, [req.body.district]);

    try {

      if(verifyDistrict.length > 0){
        res.json({mensagem: "Districto já está registado!"});
        return;
      }

      res.json({mensagem: "Distrito adicionado com sucesso!"});
      res.json(await local.addLocal(req.body));
      console.log("Distrito adicionado com sucesso!");
      
    } catch (err) {
      res.status(300).send({mensagem: "Problema no pedido!"})
      next(err);
    }
});

route.delete('/:id', async function(req, res, next) {
  try {
    res.json(await local.deleteLocal(req.params.id));
    res.status(200).send({mensagem: "Distrito eliminado com sucesso!"})
  } catch (err) {
    res.status(200).send({mensagem: "Problema no pedido!"})
    next(err);
  }
});

route.put('/', async function(req, res, next) {
  try {
    console.log(req.body);
    res.json(await local.editLocal(req.body));
    res.status(200).send({mensagem: "Distrito alterado com sucesso!"})
  } catch (err) {
    res.status(200).send({mensagem: "Problema no pedido!"})
    next(err);
  }
});


module.exports = route;
