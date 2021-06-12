const db = require("./db.js");

// this function return all scouts on DB
async function getAll(){
  const instruction = await db.query(
    `SELECT *
    FROM instruction`,);

  return instruction;
}

// this function
async function getById(id){

  const instruction = await db.query(
    `SELECT * 
    FROM instruction 
    WHERE id_instruction = ?`, [id]);

  return instruction;
}

async function addInstruction(body){

  console.log(body.title);
  console.log(body.descri);
  console.log(body.img);

  const instruction = await db.query(
    `insert into instruction 
    (title_instruction, descri_instruction, 
      img_instruction) values (?, ?, ?);`,
       [body.title, body.descri, body.img]);

  return instruction;
}

async function deleteInstruction(id){

  const instruction = await db.query(
    `delete from instruction where id_instruction = `+ id + `;`);

  return instruction;
}

  async function editInstruction(body){

    const instruction = await db.query(
      `update instruction set title_instruction = ?, descri_instruction = ?, img_instruction = ? where id_instruction = ?;`,
      [body.title, body.descri, body.img, body.id]);
  
    return instruction;
  }


module.exports = {
  getAll,
  getById,
  addInstruction,
  deleteInstruction,
  editInstruction
}
