const express = require('express');
const route = express.Router();
const login = require('../models/scoutLoginModel.js');

/* 
  Route to GET all login on data base. 
*/
route.get('/login', async function (req, res, next) {
  try {
    res.json(await login.getAllLogin(req.query.page));
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
route.get('/login/:id', async function (req, res, next) {
  try {
    res.json(await login.getLoginById(req.params.id));
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
  Route to CREATE a scout on data base. 
*/
route.post('/login/', async function (req, res, next) {
  try {
    res.json(await login.createLogin(req.body));
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
  Route to update a scout on data base. 
*/
route.put('/login/:id', async function (req, res, next) {
  try {
    console.log(req.params.id)
    res.json(await login.updateLogin(req.params.id, req.body));
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
  Route to delete a scout on data base. 
*/
route.delete('/login/:id', async function (req, res, next) {
  try {
    res.json(await login.removeLogin(req.params.id));
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