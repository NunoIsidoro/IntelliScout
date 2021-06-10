/*
  note remember:  
    put `` insted of '' or "" in queries to make an "enter" or you can use "/"
    id is auto increment
*/

// imports
const db = require("./db.js");

/*
  this function return all logins on DB
*/
async function getAllLogin() {
  const login = await db.query(
    `SELECT *
    FROM scout_login`, );

  return login;
}

/*
  this function return the chosed one
*/
async function getLoginById(id) {

  const login = await db.query(
    `SELECT * 
    FROM scout_login
    WHERE id_scout_login = ?`, [id]);

  return login;
}

/*
  Creat a new row 
*/
async function createLogin(body) {

  // show data on console to know what's going on and if we receive the right values
  console.log(body)

  const login = await db.query(
    `INSERT INTO scout_login (email_scout_login, password_scout_login, scout_role_id_scout_role
        VALUES (?, ?, ?)`,
    [
      body.email, body.password, body.roleId
    ],
  )

  return {
    login,
  }
}

/* 
  this function is to update a login 
*/
async function updateLogin(id, body) {

  // show data on console to know what's going on and if we receive the right values
  console.log(body)

  const login = await db.query(
    `UPDATE scout_login SET email_scout_login = ?, password_scout_login = ?, scout_role_id_scout_role = ?`,
    [
      body.email, body.password, body.roleId
    ]
  )

}

/*
  this function is to remove a role
*/
async function removeLogin(id) {

  // Remove a login
  const login = await db.query(
    'DELETE FROM scout_login WHERE id_scout_login = ?', [id]
  )

}
module.exports = {
  getAllLogin,
  getLoginById,
  createLogin,
  updateLogin,
  removeLogin
}