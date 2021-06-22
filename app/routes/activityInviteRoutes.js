const express = require('express');
const route = express.Router();
const activity = require('../models/activityInviteModel.js');

/* 
  Route to GET all activity on data base. 
*/
route.get('/', async function (req, res, next) {
  try {
    res.json(await activity.getAll(req.query.page));
  } catch (err) {
    console.error(`*** Erro: ***\n Não consegue encontrar as atividades.\n`, err.message);
    res.json([{
      'title': 'Pedimos desculpa, não conseguimos encontrar as atividades :( ...'
    },
    {
      'message': err.message
    }
  ]);

    next(err);
  }
});

/* 
  Route to GET one activity on data base. 
*/
route.get('/:id/:id2', async function (req, res, next) {
  try {
    res.json(await activity.getById(req.params.id));
  } catch (err) {
    console.error(`*** Erro: ***\n Não consegue encontrar a atividade.\n`, err.message);
    res.json([{
      'title': 'Pedimos desculpa, não conseguimos encontrar a atividade :( ...'
    },
    {
      'message': err.message
    }
  ]);

    next(err);
  }
});

/* 
  Route to CREATE a activity on data base. 
*/
route.post('/', async function (req, res, next) {
  try {
    res.json(await activity.create(req.body));
  } catch (err) {
    console.error(`*** Erro: ***\n Não consegue adicionar a actividade.\n`, err.message);
    res.json([{
      'title': 'Pedimos desculpa, não conseguimos adicionar a actividade :( ...'
    },
    {
      'message': err.message
    }
  ]);

    next(err)
  }
})

/* 
  Route to update a activity on data base. 
*/
route.put('/:id', async function (req, res, next) {
  try {
    console.log(req.params.id)
    res.json(await activity.update(req.params.id, req.body));
  } catch (err) {
    console.error(`*** Erro: ***\n Não consegue editar a atividade.\n`, err.message);
    res.json([{
        'title': 'Pedimos desculpa, não conseguimos editor a atividade :( ...'
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
route.delete('/:id', async function (req, res, next) {
  try {
    res.json(await scouts.remove(req.params.id));
  } catch (err) {
    console.error(`*** Erro: ***\n Não consegue eliminar a atividade.\n`, err.message);
    res.json([{
        'title': 'Pedimos desculpa, não conseguimos eliminar a atividade :( ...'
      },
      {
        'message': err.message
      }
    ]);

    next(err);
  }
});

module.exports = route;