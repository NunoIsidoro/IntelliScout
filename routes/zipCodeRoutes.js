const express = require('express');
const route = express.Router();
const db = require("../models/db.js");
const zipCode = require('../models/zipCodeModel.js');



route.get('/', async function(req, res, next) {
  try {
    res.json(await zipCode.getAll());
    res.status(200).send({mensagem: "Lista de distritos pedida com sucesso!"})
  } catch (err) {
    res.status(200).send({mensagem: "Problema no pedido!"})
    next(err);
  }
});

route.get('/:id', async function(req, res, next) {
  try {
    res.json(await zipCode.getById(req.params.id));
    res.status(200).send({mensagem: "Distrito consultado com sucesso!"})
  } catch (err) {
    res.status(200).send({mensagem: "Problema no pedido!"})
    next(err);
  }
});

//Add a new equipment
route.post('/', async function(req, res, next) { 

  const verifyDistrict = await db.query(
    `select district_zip_code from zip_code where district_zip_code = ?`, [req.body.district]);

    try {

      if(verifyDistrict.length > 0){
        res.json({mensagem: "Districto já está registado!"});
        return;
      }

      res.json({mensagem: "Distrito adicionado com sucesso!"});
      res.json(await zipCode.addZipCode(req.body));
      console.log("Distrito adicionado com sucesso!");
      
    } catch (err) {
      res.status(300).send({mensagem: "Problema no pedido!"})
      next(err);
    }
});

route.delete('/:id', async function(req, res, next) {
  try {
    res.json(await zipCode.deleteZipCode(req.params.id));
    res.status(200).send({mensagem: "Distrito eliminado com sucesso!"})
  } catch (err) {
    res.status(200).send({mensagem: "Problema no pedido!"})
    next(err);
  }
});

route.put('/', async function(req, res, next) {
  try {
    console.log(req.body);
    res.json(await zipCode.editZipCode(req.body));
    res.status(200).send({mensagem: "Distrito alterado com sucesso!"})
  } catch (err) {
    res.status(200).send({mensagem: "Problema no pedido!"})
    next(err);
  }
});


module.exports = route;
