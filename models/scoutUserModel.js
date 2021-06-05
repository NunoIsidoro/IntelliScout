const db = require("./db.js");

async function getMultiple(){
  const scouts = await db.query(
    `SELECT *
    FROM scout_user`, 
  );

  return scouts;
}

module.exports = {
  getMultiple
}
