/*
  note remember:  
    put `` insted of '' or "" in queries to make an "enter" or you can use "\"
    id is auto increment)
*/

// imports
const db = require("./db.js");

/*
  this function return all Activity on DB
*/
async function getAll() {
  const activity = await db.query(
    `SELECT *
    FROM activity`, );

  return activity;
}

/*
  this function return the chosed one
*/
async function getById(idActivity) {

  const activity = await db.query(
    `SELECT * 
    FROM activity 
    WHERE id_Activity = ?`, [idActivity]);

  return activity;
}


async function getDistrict(idActivityLocal) {

  const activity = await db.query(
    `SELECT district_local
    FROM locality
    WHERE id_local = ?`, [idActivityLocal]);

  return activity;
}

/*
  Creat a new activity 
*/
async function create(body) {

  // show data on console to know what's going on and if we receive the right values
  console.log(body)

  const activity = await db.query(
    'INSERT INTO activity (name_activity, dt_start_activity, \
      hour_start_activity, id_local, id_activity_type) \
      VALUES (?, ?, ?, ?, ?, ?, ?)',
    [
      body.name, body.dtStart, 
      body.hourStart, body.local, body.idType
    ],
  )

  return {
    activity
  }
}

/* 
  this function is to update a activity
*/
async function update(body) {

  const activity = await db.query(
    `UPDATE activity 
     SET name_activity = ?, dt_start_activity = ?,
     hour_start_activity = ?, id_local = ?, 
     id_activity_type = ?
     WHERE id_activity = ?`,
    [
      body.name, body.dtStart, 
      body.hourStart, body.local, body.idType, body.idActivity
    ]
  )
}

/*
  this function is to remove a Activity
*/
async function remove(idActivity) {

  const activity = await db.query(
    'DELETE FROM activity WHERE id_activity = ?', [idActivity]
  )
}
module.exports = {
  getAll,
  getById,
  getDistrict,
  create,
  update,
  remove
}