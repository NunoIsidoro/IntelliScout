const express = require('express');
const route = express.Router();
const scouts = require('../models/scoutUserModel.js');

/* GET all scouts on data base. */
route.get('/', async function (req, res, next) {
  try {
    res.json(await scouts.getAllScout(req.query.page));
  } catch (err) {
    console.error(`Erro ao tentar buscar os scouts `, err.message);
    next(err);
  }
});

route.get('/:id', async function (req, res, next) {
     try {
    res.json(await scouts.getScoutById(req.params.id));
  } catch (err) {
    console.error('Erro ao procurar o scout', err.message);
    next(err);
  }
});


route.post('/', async function(req, res, next){
  try{
    res.json(await scouts.createScout(req.body));
  }catch(err){
    console.error(`Erro ao criar um scout`, err.message);
    next(err)
  } 
})

route.put('/:id', async function(req, res, next) {
  try {
    console.log(req.params.id)
    res.json(await scouts.updateScout(req.params.id, req.body));
  } catch (err) {
    console.error(`Error ao editar um scout `, err.message);
    next(err);
  }
});

route.delete('/:id', async function(req, res, next) {
  try {
    res.json(await activities.removeScout(req.params.id));
  } catch (err) {
    console.error(`Error ao remover um scout `, err.message);
    next(err);
  }
});

module.exports = route;