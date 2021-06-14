const db = require("./db.js");

// this function return all scouts on DB
async function getAll(){
  const instruction = await db.query(
    `SELECT *
    FROM instruction_catalog`,);

  return instruction;
}

// this function
async function getById(id){

  const instruction = await db.query(
    `SELECT * 
    FROM instruction_catalog 
    WHERE id_instruction_catalog = ?`, [id]);

  return instruction;
}

async function addInstruction(body){

  console.log(body.name);
  console.log(body.quantity);
  console.log(body.descr);

  const instruction = await db.query(
    `insert into instruction_catalog 
    (name_instruction_catalog, id_instruction, 
        id_equipment) values (?, ?, ?);`,
       [body.name, body.idInstr, body.idEquip]);

  return equipment;
}

async function deleteInstruction(id){

  const instruction = await db.query(
    `delete from instruction_catalog where id_instruction_catalog = `+ id + `;`);

  return instruction;
}

  async function editInstruction(body){

    const instruction = await db.query(
      `update instruction_catalog set name_instruction_catalog = ?, id_instruction = ?, id_equipment = ? where id_instruction_catalog = ?;`,
      [body.name, body.idInstr, body.idEquip, body.id]);
  
    return instruction;
  }


module.exports = {
  getAll,
  getById,
  addInstruction,
  deleteInstruction,
  editInstruction
}
