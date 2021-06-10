const express = require('express');
const route = express.Router();
const authentic = require('../models/authenticModel.js');
const db = require("../models/db.js");
const bcrypt = require('bcrypt');

/* GET all scouts on data base. */
route.get('/listUsers', async function(req, res, next) {
  try {
    res.json(await authentic.getListUsers(req.query.page));
  } catch (err) {
    console.error(`Erro ao tentar buscar os usuários `, err.message);
    next(err);
  }
});

route.post('/register', async function(req, res, next){
   
  try{

    res.json(await authentic.newUser(req.body))
    res.status(201).send({mensagem: "Utilizador registado com sucesso!"});

  }catch(err){

    console.error('SQL error', err);
    res.status(500).send({mensagem: "Erro na conexão BD"})
    
  }

  
  });



module.exports = route;
