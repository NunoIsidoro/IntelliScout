const express = require('express');
const route = express.Router();
const roles = require('../models/scoutRoleModel.js');

/* GET all scouts on data base. */
route.get('/', async function (req, res, next) {
  try {
    res.json(await roles.getAllRole(req.query.page));
  } catch (err) {
    console.error(`Erro ao tentar buscar os scouts `, err.message);
    next(err);
  }
});

route.get('/:id', async function (req, res, next) {
  try {
    res.json(await roles.getById(req.params.id));
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


route.post('/', async function (req, res, next) {
  try {
    res.json(await roles.create(req.body));
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
    res.json(await roles.update(req.params.id, req.body));
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
    res.json(await roles.remove(req.params.id));
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