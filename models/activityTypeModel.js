const db = require("./db.js");

// this function return all scouts on DB
async function getAll(){
  const activity = await db.query(
    `SELECT *
    FROM activity_type`,);

  return activity;
}

// this function
async function getById(id){

  const activity = await db.query(
    `SELECT * 
    FROM activity_type 
    WHERE id_activity_type = ?`, [id]);

  return activity;
}

async function addActivityType (body){

  console.log(body.name);
  console.log(body.descr);

  const activity = await db.query(
    `insert into activity_type 
    (name_activity_type, descr_activity_type) values (?, ?);`,
       [body.name, body.descr]);

  return activity;
}

async function deleteActivityType(id){

  const activity = await db.query(
    `delete from activity_type where id_activity_type = `+ id + `;`);

  return activity;
}

  async function editActivityType(body){

    const activity = await db.query(
      `update activity_type set name_activity_type = ?, descr_activity_type = ? where id_activity_type = ?;`,
      [body.name, body.descr, body.id]);
  
    return activity;
  }


module.exports = {
  getAll,
  getById,
  addActivityType,
  deleteActivityType,
  editActivityType
}
