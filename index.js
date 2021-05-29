// import libraries
const express = require("express")
const app = express()

const bodyParser = require('body-parser')

const port = 60000

// parse requests of content-type: application/json
app.use(bodyParser.json());

// rota inicial
app.get("/", (req, res) => {
    res.json({ message: "Bem vindo, Api de IntelliScout." });
});


const scoutRoute = require("../IntelliScout/routes/scout_user.routes.js");

app.use('/scouts', scoutRoute)

// set port, listen for requests
app.listen(3000, () => console.log('Conectado na porta ' + port))
