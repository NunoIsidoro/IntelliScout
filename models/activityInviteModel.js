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
    FROM activity_invite`, );

  return activity;
}

/*
  this function return the chosed one
*/
async function getById(id, id2) {

  const activity = await db.query(
    `SELECT * 
    FROM activity_invite 
    WHERE id_activity = ? AND id_scout_team = ?`, [id, id2] );
  return activity;
}

/*
  Creat a new activity 
*/
async function create(body) {

  // show data on console to know what's going on and if we receive the right values
  console.log(body)

  const activity = await db.query(
    `INSERT INTO activity_invite (id_scout_team, id_activity)
      VALUES (?, ?)`,
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
async function update(id, id2, body) {

  const activity = await db.query(
    `UPDATE activity_invite 
     SET id_scout_team = ?, id_activity = ?
     WHERE id_activity = ?`, [id], `AND` , [id2] 
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
    `DELETE FROM activity_invite WHERE id_activity = ?`, [id], ` AND id_scout_team = ?`, [id2] );
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
}