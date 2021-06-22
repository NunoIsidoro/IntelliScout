const express = require('express');
const route = express.Router();
const login = require('../models/scoutLoginModel.js');

/* 
  Route to GET all login on data base. 
*/
route.get('/', async function (req, res, next) {
  try {
    res.json(await login.getAll(req.query.page));
  } catch (err) {
    console.error(`*** Erro: ***\n Não consegue encontrar os logins.\n`, err.message);
    res.json([{
      'title': 'Pedimos desculpa, não conseguimos encontrar os logins :( ...'
    },
    {
      'message': err.message
    }
  ]);

    next(err);
  }
});

/* 
  Route to GET one login on data base. 
*/
route.get('/:id', async function (req, res, next) {
  try {
    res.json(await login.getById(req.params.id));
  } catch (err) {
    console.error(`*** Erro: ***\n Não consegue encontrar um login.\n`, err.message);
    res.json([{
      'title': 'Pedimos desculpa, não conseguimos encontrar o login :( ...'
    },
    {
      'message': err.message
    }
  ]);

    next(err);
  }
});

/* 
  Route to CREATE a login on data base. 
*/
route.post('/', async function (req, res, next) {
  try {
    res.json(await login.create(req.body));
  } catch (err) {
    console.error(`*** Erro: ***\n Não consegue adicionar um login.\n`, err.message);
    res.json([{
      'title': 'Pedimos desculpa, não conseguimos adicionar um login :( ...'
    },
    {
      'message': err.message
    }
  ]);

    next(err)
  }
})

/* 
  Route to update a login on data base. 
*/
route.put('/:id', async function (req, res, next) {
  try {
    console.log(req.params.id)
    res.json(await login.update(req.params.id, req.body));
  } catch (err) {
    console.error(`*** Erro: ***\n Não consegue editar o login.\n`, err.message);
    res.json([{
        'title': 'Pedimos desculpa, não conseguimos editor o login :( ...'
      },
      {
        'message': err.message
      }
    ]);

    next(err);
  }
});

/* 
  Route to delete a login on data base. 
*/
route.delete('/:id', async function (req, res, next) {
  try {
    res.json(await login.remove(req.params.id));
  } catch (err) {
    console.error(`*** Erro: ***\n Não consegue eliminar o login.\n`, err.message);
    res.json([{
        'title': 'Pedimos desculpa, não conseguimos eliminar o login :( ...'
      },
      {
        'message': err.message
      }
    ]);

    next(err);
  }
});

module.exports = route;