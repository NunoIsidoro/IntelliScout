const db = require("./db.js");

// this function return all scouts on DB
async function getAll(){
  const section = await db.query(
    `SELECT *
    FROM scout_section`,);

  return section;
}

// this function
async function getById(id){

  const section = await db.query(
    `SELECT * 
    FROM scout_section 
    WHERE id_scout_section = ?`, [id]);

  return section;
}

module.exports = {
  getAll,
  getById
}
