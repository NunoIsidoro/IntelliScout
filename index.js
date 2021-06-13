const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require("./models/db.js");
const port = 3000;

// this is to for mysql use the values in body
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const scoutRoute = require('./routes/scoutUserRoutes');
const authenticRoute = require('./routes/authenticRoutes');
const equipamentRoute = require('./routes/equipmentRoutes');
const instructionRoute = require('./routes/instructionRoutes');
const instructionCatalogRoute = require('./routes/instructionCatalogRoutes');
const zipCodeRoute = require('./routes/zipCodeRoutes');
const activityTypeRoute = require('./routes/activityTypeRoutes');
const scoutTeamRoute = require('./routes/scoutTeamRoutes');
const participateActivityRoute = require('./routes/participateActivityRoutes');
const necessaryEquipmentRoute = require('./routes/necessaryEquipmentRoutes');

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
app.use('/authentic', authenticRoute);
app.use('/equipment', equipamentRoute);
app.use('/instruction', instructionRoute);
app.use('/instructionCatalog', instructionCatalogRoute);
app.use('/zipCode', zipCodeRoute);
app.use('/activityType', activityTypeRoute);
app.use('/scoutTeam', scoutTeamRoute);
app.use('/participate', participateActivityRoute);
app.use('/necessaryEquipment', necessaryEquipmentRoute);
  
app.listen(port, () => {
  console.log('Conectado na porta ' + port)
});