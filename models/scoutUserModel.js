/*
  note remember:  
    put `` insted of '' or "" in queries to make an "enter" or you can use "/"
    id is auto increment)
*/

// imports
const db = require("./db.js");

/*
  this function return all scouts on DB
*/
async function getAllScout() {
  const scouts = await db.query(
    `SELECT *
    FROM scout_user`);

  return scouts;
}

/*
  this function return the chosed one
*/
async function getScoutById(id) {

  const scout = await db.query(
    `SELECT * 
    FROM scout_user 
    WHERE id_scout_user = ?`, [id]);

  return scout;
}

/*
  Creat a new scout 
*/
async function createScout(body) {

  // show data on console to know what's going on and if we receive the right values
  console.log(body)

  console.log("teste 1");
  const scout = await db.query(
    'INSERT INTO scout_user (name_scout_user, birth_scout_user, gender_scout_user, \
        phone_scout_user, adress_scout_user, active_scout_user, nin_scout_user, phone_ee_scout_user, url_img_scout_user, \
        scout_login_id_scout_login, id_scout_team, id_zip_code) \
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [
      body.name, body.birth, body.gender, body.phone, body.adress,
      body.active, body.nin, body.phone_ee, body.url_img,
      body.scout_login, body.scout_team, body.zip_cod
    ],
  )


  // a simple error message to know if we create a scout succefully
  let errorMessage = 'Error: Can not add a scout'

  if (scout.affectedRows) {
    errorMessage = 'Message: Add a Scout successfully'
  }

 

  return {
    scout,
    errorMessage
  }
}

/* 
  this function is to update a scoute
*/
async function updateScout(id, body) {

  const scout = await db.query(
    `UPDATE scout_user SET name_scout_user = ?, birth_scout_user = ?, gender_scout_user = ?,
      phone_scout_user = ?, adress_scout_user = ?, active_scout_user = ?, nin_scout_user = ?, phone_ee_scout_user = ?, url_img_scout_user = ?, 
      id_scout_login = ?, id_scout_team = ?, id_zip_code = ? where id_scout_user = ?`,
    [
      body.name, body.birth, body.gender, body.phone, body.adress,
      body.active, body.nin, body.phone_ee, body.url_img,
      body.scout_login, body.scout_team, body.zip_cod, id
    ]
  )
  let errorMessage = 'Error: Cannot update...'

  if (scout.affectedRows) {
    errorMessage = 'Message: Scout updated successfully'
  }

  return {
    errorMessage
  }
}

/*
  this function is to remove a scout
*/
async function removeScout(id) {

  // Remove a scoute
  const scout = await db.query(
    'DELETE FROM scout_user WHERE id_scout_user = ?', [id]
  )

  let errorMessage = 'Error: Can not delete scout'

  if (result.affectedRows) {
    errorMessage = 'Message: Scout deleted sucessufully'
  }

  return {
    errorMessage
  }
}
module.exports = {
  getAllScout,
  getScoutById,
  createScout,
  updateScout,
  removeScout
}