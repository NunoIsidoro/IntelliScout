const express = require('express');
const route = express.Router();
const db = require("../models/db.js");
const instruction = require('../models/instructionCatalogModel.js');



route.get('/', async function (req, res, next) {
  try {
    res.json(await instruction.getAll(req.query.page));
  } catch (err) {
    console.error(`*** Erro: ***\n Não consegue encontrar as instruções.\n`, err.message);
    res.json([{
        'title': 'Pedimos desculpa, não conseguimos encontrar as instruções. :( ...'
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
    res.json(await instruction.getById(req.params.id));
  } catch (err) {
    console.error(`*** Erro: ***\n Não consegue encontrar a instrução.\n`, err.message);
    res.json([{
        'title': 'Pedimos desculpa, não conseguimos encontrar a instrução :( ...'
      },
      {
        'message': err.message
      }
    ]);

    next(err);
  }
});

//Add a new equipment
route.post('/', async function (req, res, next) {
  try {
    res.json(await instruction.addInstruction(req.body));
  } catch (err) {
    console.error(`*** Erro: ***\n Não consegue adicionar a instrução.\n`, err.message);
    res.json([{
        'title': 'Pedimos desculpa, não conseguimos adicionar a instrução :( ...'
      },
      {
        'message': err.message
      }
    ]);

    next(err)
  }
})

route.delete('/:id', async function (req, res, next) {
  try {
    res.json(await instruction.deleteInstruction(req.params.id));
    res.status(200).send({
      mensagem: "Instrução eliminado com sucesso!"
    })
  } catch (err) {
    res.status(200).send({
      mensagem: "Problema no pedido!"
    })
    next(err);
  }
});

route.put('/', async function (req, res, next) {
  try {
    console.log(req.body);
    res.json(await instruction.editInstruction(req.body));
    res.status(200).send({
      mensagem: "Instrução alterado com sucesso!"
    })
  } catch (err) {
    res.status(200).send({
      mensagem: "Problema no pedido!"
    })
    next(err);
  }
});



module.exports = route;