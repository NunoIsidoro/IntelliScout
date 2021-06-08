const express = require('express');
const route = express.Router();
const roles = require('../models/scoutRoleModel.js');

/* GET all scouts on data base. */
route.get('/role/', async function (req, res, next) {
  try {
    res.json(await roles.getAllScout(req.query.page));
  } catch (err) {
    console.error(`Erro ao tentar buscar os scouts `, err.message);
    next(err);
  }
});

route.get('/role/:id', async function (req, res, next) {
  try {
    res.json(await roles.getScoutById(req.params.id));
  } catch (err) {
    console.error(`*** Erro: ***\n Não consegue encontrar um role.\n`, err.message);
    res.json([{
      'title': 'Pedimos desculpa, não conseguimos encontrar o escuteiro :( ...'
    },
    {
      'message': err.message
    }
  ]);

    next(err);
  }
});


route.post('/role/', async function (req, res, next) {
  try {
    res.json(await roles.createScout(req.body));
  } catch (err) {
    console.error(`*** Erro: ***\n Não consegue adicionar um escuteiro.\n`, err.message);
    res.json([{
      'title': 'Pedimos desculpa, não conseguimos adicionar um escuteiro :( ...'
    },
    {
      'message': err.message
    }
  ]);

    next(err)
  }
})

route.put('/role/:id', async function (req, res, next) {
  try {
    console.log(req.params.id)
    res.json(await roles.updateScout(req.params.id, req.body));
  } catch (err) {
    console.error(`*** Erro: ***\n Não consegue editar o escuteiro.\n`, err.message);
    res.json([{
        'title': 'Pedimos desculpa, não conseguimos editor o escuteiro :( ...'
      },
      {
        'message': err.message
      }
    ]);

    next(err);
  }
});

route.delete('/role/:id', async function (req, res, next) {
  try {
    res.json(await roles.removeScout(req.params.id));
  } catch (err) {
    console.error(`*** Erro: ***\n Não consegue eliminar o escuteiro.\n`, err.message);
    res.json([{
        'title': 'Pedimos desculpa, não conseguimos eliminar o escuteiro :( ...'
      },
      {
        'message': err.message
      }
    ]);

    next(err);
  }
});

module.exports = route;