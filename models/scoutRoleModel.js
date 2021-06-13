/*
  note remember:  
    put `` insted of '' or "" in queries to make an "enter" or you can use "/"
    id is auto increment
*/

// imports
const db = require("./db.js");

/*
  this function return all roles on DB
*/
async function getAllRole() {
  const roles = await db.query(
    `SELECT *
    FROM scout_role`, );

  return roles;
}

/*
  this function return the chosed one
*/
async function getRoleById(id) {

  const role = await db.query(
    `SELECT * 
    FROM scout_role
    WHERE id_scout_role = ?`, [id]);

  return role;
}

/*
  Creat a new role 
*/
async function createRole(body) {

  // show data on console to know what's going on and if we receive the right values
  console.log(body)

  const role = await db.query(
    `INSERT INTO scout_role (name_scout_role, descr_scout_role), 
        VALUES (?, ?)`,
    [
      body.name, body.descr
    ],
  )

  return {
    role,
  }
}

/* 
  this function is to update a role
*/
async function updateRole(id, body) {

  // show data on console to know what's going on and if we receive the right values
  console.log(body)

  const role = await db.query(
    `UPDATE scout_user SET name_scout_role = ?, descr_scout_role = ?`,
    [
      body.name, body.descr
    ]
  )

}

/*
  this function is to remove a role
*/
async function removeRole(id) {

  // Remove a role
  const role = await db.query(
    'DELETE FROM scout_role WHERE id_scout_role = ?', [id]
  )

}
module.exports = {
  getAllRole,
  getRoleById,
  createRole,
  updateRole,
  removeRole
}