const db = require("./db.js");

// this function return all scouts on DB
async function getListUsers(){
  const authentic = await db.query(
    `SELECT *
    FROM scout_login`);

  return authentic;
}

async function newUser(body){

  const { gmail, password, role} = body;
//passwordhs = await bcrypt.hash(password, 5);

  var scriptSQL = `insert into scout_login (email_scout_login, password_scout_login, scout_role_id_scout_role) values ('` + gmail + `','` + password + `',` + role +`)`;
  const result = await db.query(scriptSQL);
  console.log(scriptSQL);
    //res.status(201).send({mensagem: "Utilizador registado com sucesso!"});


      console.log(scriptSQL);

  return result;
}


module.exports = {
  getListUsers,
  newUser
}
