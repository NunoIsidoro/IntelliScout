const db = require("./db.js");

// this function return all scouts on DB
async function getListUsers(){
  const authentic = await db.query(
    `SELECT *
    FROM scout_login`);

  return authentic;
}


module.exports = {
  getListUsers
}
