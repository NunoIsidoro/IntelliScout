const db = require("./db.js");

// this function return all scouts on DB
async function getAll(){
  const participate = await db.query(
    `SELECT *
    FROM participate_scout_user_activity`,);

  return participate;
}

// this function
async function getById(idUser, idActivity){

  const participate = await db.query(
    `SELECT * 
    FROM participate_scout_user_activity 
    WHERE id_scout_user = ? AND id_activity = ?`, [idUser, idActivity]);

  return participate;
}

async function addParticipation (body){

  const participate = await db.query(
    `insert into participate_scout_user_activity 
    (id_scout_user, id_activity) values (?, ?);`,
       [body.idUser, body.idActivity]);
  return participate;
}

async function deleteParticipation(idUser, idActivity){

  const participate = await db.query(
    `delete from participate_scout_user_activity where id_scout_user = ? and id_activity = ?`, [idUser, idActivity] );

  return participate;
}

  async function editParticipation(body){

    const participate = await db.query(
      `update participate_scout_user_activity set id_scout_user = ?, id_activity = ? where id_scout_user = ? and id_activity = ?;`,
      [body.idUser, body.idActivity, body.idUser, body.idActivity]);
  
    return participate;
  }


module.exports = {
  getAll,
  getById,
  addParticipation,
  deleteParticipation,
  editParticipation
}
