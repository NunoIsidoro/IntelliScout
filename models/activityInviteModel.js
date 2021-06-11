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
async function getAllActivityInvite() {
  const activity = await db.query(
    `SELECT *
    FROM activity_invite`, );

  return activity;
}

/*
  this function return the chosed one
*/
async function getActivityInviteById(id) {

  const activity = await db.query(
    `SELECT * 
    FROM activity_Invite 
    WHERE activity_id_activity = ?`, [id], ` AND scout_team_id_scout_team = ?`,);
  return activity;
}

/*
  Creat a new activity 
*/
async function createActivity(body) {

  // show data on console to know what's going on and if we receive the right values
  console.log(body)

  const activity = await db.query(
    'INSERT INTO activity (name_activity, dt_start_activity, dt_end_activity, \
      hour_start_activity, hour_end_activity, activity_localidactivity_local, activity_type_id_activity_type) \
      VALUES (?, ?, ?, ?, ?, ?, ?)',
    [
      body.name, body.dt_start, body.dt_end, 
      body.hour_start, body.hour_end, body.local, body.idType
    ],
  )

  return {
    activity
  }
}

/* 
  this function is to update a activity
*/
async function updateActivity(id, body) {

  const activity = await db.query(
    `UPDATE activity 
     SET name_activity = ?, dt_start_activity = ?, dt_end_activity = ?,
     hour_start_activity = ?, hour_end_activity = ?, activity_localidactivity_local = ?, 
     activity_type_id_activity_type = ?
     WHERE id_activity = ?`, [id],
    [
      body.name, body.dt_start, body.dt_end, 
      body.hour_start, body.hour_end, body.local, body.idType
    ]
  )
}

/*
  this function is to remove a Activity
*/
async function removeActivity(id) {

  const activity = await db.query(
    'DELETE FROM activity WHERE id_activity = ?', [id]
  )
}
module.exports = {
  getAllActivity,
  getActivityById,
  createActivity,
  updateActivity,
  removeActivity
}