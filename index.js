const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require("./models/db.js");
const port = 3000;

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
app.use('/api', scoutRoute);

const loginRoute = require('./routes/scoutLoginRoutes');
app.use('/api', loginRoute);

const roleRoute = require('./routes/scoutRoleRoutes');
app.use('/api', roleRoute);

const activityRoute = require('./routes/activityRoutes');
app.use('/api', activityRoute);

const activityInviteRoute = require('./routes/activityInviteRoutes');
app.use('/api', activityInviteRoute);

const authenticRoute = require('./routes/authenticRoutes');
app.use('/api', authenticRoute);

const equipamentRoute = require('./routes/equipmentRoutes');
app.use('/api', equipamentRoute);

const instructionRoute = require('./routes/instructionRoutes');
app.use('/api', instructionRoute);

const instructionCatalogRoute = require('./routes/instructionCatalogRoutes');
app.use('/api', instructionCatalogRoute);

const zipCodeRoute = require('./routes/zipCodeRoutes');
app.use('/api', zipCodeRoute);

const activityTypeRoute = require('./routes/activityTypeRoutes');
app.use('/api', activityTypeRoute);

const scoutTeamRoute = require('./routes/scoutTeamRoutes');
app.use('/api', scoutTeamRoute);

const participateActivityRoute = require('./routes/participateActivityRoutes');
app.use('/api', participateActivityRoute);
  
const necessaryEquipmentRoute = require('./routes/necessaryEquipmentRoutes');
app.use('/api', necessaryEquipmentRoute);

app.listen(port, () => {
  console.log('Conectado na porta ' + port)
});