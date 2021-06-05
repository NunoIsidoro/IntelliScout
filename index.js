const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const scoutRoute = require('./routes/scoutUserRoutes');


app.get('/', (req, res) => {
  res.json({'message': 'ok'});
})

app.use('/scout', scoutRoute);
  
app.listen(port, () => {
  console.log('Conectado na porta ' + port)
});