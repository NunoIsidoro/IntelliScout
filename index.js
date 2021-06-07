const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const scoutRoute = require('./routes/scoutUserRoutes');
const authenticRoute = require('./routes/authenticRoutes');


app.get('/', (req, res) => {
  res.json({'message': 'ok'});
})


app.use('/scout', scoutRoute);
app.use('/authentic', authenticRoute);
  
app.listen(port, () => {
  console.log('Conectado na porta ' + port)
});