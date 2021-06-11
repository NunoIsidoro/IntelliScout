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
    console.error(`*** Erro: ***\n Não consegue adicionar um escuteiro.\n`, err.message);
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


route.post('/', async function (req, res, next) {
  try {
    res.json(await scouts.createScout(req.body));
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

route.put('/:id', async function (req, res, next) {
  try {
    console.log(req.params.id)
    res.json(await scouts.updateScout(req.params.id, req.body));
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

route.delete('/:id', async function (req, res, next) {
  try {
    res.json(await scouts.removeScout(req.params.id));
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