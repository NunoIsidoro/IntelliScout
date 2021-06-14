/*
  note remember:  
    put `` insted of '' or "" in queries to make an "enter" or you can use "\"
    id is auto increment)
*/

// imports
const db = require("./db.js");

/*
  this function return all ActivityInvite on DB
*/
async function getAll() {
  const activity = await db.query(
    `SELECT *
    FROM activity_local`, );

  return activity;
}

/*
  this function return the chosed one
*/
async function getById(idActivityLocal) {

  const activity = await db.query(
    `SELECT * 
    FROM activity_local 
    WHERE id_activity_local = ?`, [idActivityLocal] );
  return activity;
}

/*
  Creat a new activity 
*/
async function create(body) {

  // show data on console to know what's going on and if we receive the right values
  console.log(body)

  const activity = await db.query(
    `INSERT INTO activity_local (longitude_activity_local, latitude_activity_local, url_activity_local, id_zip_code)
      VALUES (?, ?, ?, ?)`,
    [
      body.idTeam, body.idActivity
    ],
  )

  return {
    activity
  }
}

/* 
  this function is to update a activity
*/
async function update(id, body) {

  const activity = await db.query(
    `UPDATE activity_local 
     SET longitude_activity_local = ?, latitude_activity_local = ?, url_activity_local = ?, id_zip_code = ?
     WHERE id_activity_local = ?`, [id] 
    [
      body.idTeam, body.idActivity
    ]
  )
}

/*
  this function is to remove a Activity
*/
async function remove(id) {

  const activity = await db.query(
    `DELETE FROM activity_local WHERE id_activity_local = ?`, [id] );
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
}