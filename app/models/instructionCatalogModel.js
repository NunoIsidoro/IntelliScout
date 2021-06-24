const db = require("./db.js");

// this function return all scouts on DB
async function getAll() {
  const instruction = await db.query(
    `SELECT *
    FROM instruction_catalog`, );

  return instruction;
}

// this function
async function getById(id) {

  const instruction = await db.query(
    `SELECT * 
    FROM instruction_catalog 
    WHERE id_instruction_catalog = ?`, [id]);

  return instruction;
}

async function addInstruction(body) {

  const instruction = await db.query(
    `INSERT INTO instruction_catalog 
    (name_instruction_catalog, descr_instruction_catalog) values (?, ?);`,
    [
      body.name, body.description
    ],
  )

  return {
    instruction
  }
}

async function deleteInstruction(id) {

  const instruction = await db.query(
    `delete from instruction_catalog where id_instruction_catalog = ` + id + `;`);

  return instruction;
}

async function editInstruction(body) {

  const instruction = await db.query(
    `update instruction_catalog set name_instruction_catalog = ?, descr_instruction_catalog = ? where id_instruction_catalog = ?;`,
    [body.name, body.description, body.id]);

  return instruction;
}


module.exports = {
  getAll,
  getById,
  addInstruction,
  deleteInstruction,
  editInstruction
}