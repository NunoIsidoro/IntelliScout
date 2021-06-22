const db = require("./db.js");

// this function return all scouts on DB
async function getAll(){
  const team = await db.query(
    `SELECT *
    FROM scout_team`,);

  return team;
}

// this function
async function getById(id){

  const team = await db.query(
    `SELECT * 
    FROM scout_team 
    WHERE id_scout_team = ?`, [id]);

  return team;
}

async function addTeam (body){

  const team = await db.query(
    `insert into scout_team 
    (name_scout_team, id_scout_section) values (?, ?);`,
       [body.name, body.id_scout_section]);
  return team;
}

async function deleteTeam(id){

  const team = await db.query(
    `delete from scout_team where id_scout_team = `+ id + `;`);

  return team;
}

  async function editTeam(body){

    const activity = await db.query(
      `update scout_team set name_scout_team = ?, id_scout_section = ? where id_scout_team = ?;`,
      [body.name, body.id_scout_section, body.id]);
  
    return activity;
  }


module.exports = {
  getAll,
  getById,
  addTeam,
  deleteTeam,
  editTeam
}
