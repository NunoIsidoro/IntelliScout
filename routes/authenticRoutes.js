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
    const { gmail, password, role} = req.body;
    //passwordhs = await bcrypt.hash(password, 5);
      try {
          var scriptSQL = `insert into scout_login (email_scout_login, password_scout_login, scout_role_id_scout_role) values ('` + gmail + `','` + password + `',` + role +`)`;
          const result = await db.query(scriptSQL);
          console.log(scriptSQL);
          res.status(201).send({mensagem: "Utilizador registado com sucesso!"});
      } catch (err) {
          console.error('SQL error', err);
          res.status(500).send({mensagem: "Erro na conexão BD"})
      }

      console.log(scriptSQL);
  
  });



module.exports = route;
