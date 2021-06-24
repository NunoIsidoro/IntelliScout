const express = require('express');
const route = express.Router();
const scouts = require('../models/scoutUserModel.js');

/* 
  Route to GET all scouts on data base. 
*/
route.get('', async function (req, res, next) {
  try {
    res.json(await scouts.getAllScout(req.body));
  } catch (err) {
    console.error(`*** Erro: ***\n Não consegue encontrar os escuteiro.\n`, err.message);
    res.json([{
        'title': 'Pedimos desculpa, não conseguimos encontrar os escuteiros :( ...'
      },
      {
        'message': err.message
      }
    ]);

    next(err);
  }
});

/* 
  Route to GET one scout on data base. 
*/
route.get('/:id', async function (req, res, next) {
  try {
    res.json(await scouts.getScoutById(req.params.id));
  } catch (err) {
    console.error(`*** Erro: ***\n Não consegue encontrar um escuteiro.\n`, err.message);
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

/* 
  Route to GET one scout on data base. 
*/
route.get('/district/:id', async function (req, res, next) {
  try {
    res.json(await scouts.getDistrict(req.params.id));
  } catch (err) {
    console.error(`*** Erro: ***\n Não consegue encontrar um escuteiro.\n`, err.message);
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

/* 
  Route to GET one scout on data base. 
*/
route.get('/team/:id', async function (req, res, next) {
  try {
    res.json(await scouts.getTeam(req.params.id));
  } catch (err) {
    console.error(`*** Erro: ***\n Não consegue encontrar um escuteiro.\n`, err.message);
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

/* 
  Route to CREATE a scout on data base. 
*/
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

/* 
  Route to update a scout on data base. 
*/
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

/* 
  Route to delete a scout on data base. 
*/
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