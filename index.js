const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const scoutRoute = require('./routes/scoutUserRoutes');




// this is to for mysql use the values in body
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());



// to know if we are conected
app.get('/api', (req, res) => {
  res.json([{
      'title': 'Bem vindo, api da IntelliScout.'
    },
    {
      'message': 'Conectado na porta ' + port
    }
  ]);
})

const scoutRoute = require('./routes/scoutUserRoutes');
app.use('/api', scoutRoute);

const loginRoute = require('./routes/scoutLoginRoutes');
app.use('/api', loginRoute);

const roleRoute = require('./routes/scoutRoleRoutes');
app.use('/api', roleRoute);

const activityRoute = require('./routes/activityRoutes');
app.use('/api', activityRoute);

const authenticRoute = require('./routes/authenticRoutes');
app.use('/api', authenticRoute);

const equipamentRoute = require('./routes/equipmentRoutes');
app.use('/api', equipamentRoute);
  
app.listen(port, () => {
  console.log('Conectado na porta ' + port)
});