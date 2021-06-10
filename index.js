const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const scoutRoute = require('./routes/scoutUserRoutes');
const authenticRoute = require('./routes/authenticRoutes');
const equipamentRoute = require('./routes/equipmentRoutes');


app.get('/', (req, res) => {
  res.json({'message': 'ok'});
})


app.use('/scout', scoutRoute);
app.use('/authentic', authenticRoute);
app.use('/equipment', equipamentRoute);
  
app.listen(port, () => {
  console.log('Conectado na porta ' + port)
});