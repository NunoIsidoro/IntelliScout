const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require("./models/db.js");
const port = 60000;

// this is to for mysql use the values in body
app.use(bodyParser.urlencoded({extended: true}));
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
app.use('/scoutUser', scoutRoute);

const loginRoute = require('./routes/scoutLoginRoutes');
app.use('/scoutLogin', loginRoute);

const roleRoute = require('./routes/scoutRoleRoutes');
app.use('/scoutRole', roleRoute);

const activityRoute = require('./routes/activityRoutes');
app.use('/activity', activityRoute);

const activityInviteRoute = require('./routes/activityInviteRoutes');
app.use('/activityInvite', activityInviteRoute);

const authenticRoute = require('./routes/authenticRoutes');
app.use('/authentic', authenticRoute);

const equipamentRoute = require('./routes/equipmentRoutes');
app.use('/equipament', equipamentRoute);

const instructionRoute = require('./routes/instructionRoutes');
app.use('/instruction', instructionRoute);

const instructionCatalogRoute = require('./routes/instructionCatalogRoutes');
app.use('/instructionCatalog', instructionCatalogRoute);

const zipCodeRoute = require('./routes/zipCodeRoutes');
app.use('/zipcode', zipCodeRoute);

const activityTypeRoute = require('./routes/activityTypeRoutes');
app.use('/activityType', activityTypeRoute);

const scoutTeamRoute = require('./routes/scoutTeamRoutes');
app.use('/scoutTeam', scoutTeamRoute);

const participateActivityRoute = require('./routes/participateActivityRoutes');
app.use('/participateActivity', participateActivityRoute);
  
const necessaryEquipmentRoute = require('./routes/necessaryEquipmentRoutes');
app.use('/necessaryEquipment', necessaryEquipmentRoute);

app.listen(port, () => {
  console.log('Conectado na porta ' + port)
});