const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// this is to for mysql use the values in body
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

const scoutRoute = require('./routes/scoutUserRoutes');

// to know if we are conected
app.get('/', (req, res) => {
  res.json([{
      'title': 'Bem vindo, api da IntelliScout.'
    },
    {
      'message': 'Conectado na porta ' + port
    }
  ]);
})

app.use('/scout', scoutRoute);

app.listen(port, () => {
  console.log('Conectado na porta ' + port)
});