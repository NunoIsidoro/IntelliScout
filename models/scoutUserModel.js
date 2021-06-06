const db = require("./db.js");

// this function return all scouts on DB
async function getAll(){
  const scouts = await db.query(
    `SELECT *
    FROM scout_user`,);

  return scouts;
}

// this function
async function getById(id){

  const scout = await db.query(
    `SELECT * 
    FROM scout_user 
    WHERE id_scout_user = ?`, [id]);

  return scout;
}

module.exports = {
  getAll,
  getById
}
