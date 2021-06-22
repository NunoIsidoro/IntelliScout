const db = require("./db.js");

// this function return all scouts on DB
async function getAll(){
  const equipment = await db.query(
    `SELECT *
    FROM equipment`,);

  return equipment;
}

// this function
async function getById(id){

  const equipment = await db.query(
    `SELECT * 
    FROM equipment 
    WHERE id_equipment = ?`, [id]);

  return equipment;
}

async function addEquipament(body){

  console.log(body.name);
  console.log(body.quantity);
  console.log(body.descr);

  const equipment = await db.query(
    `insert into equipment 
    (name_equipment, quantity_equipment, 
      descr_equipment, img_url_equipment) values (?, ?, ?, ?);`,
       [body.name, body.quantity, body.descr, body.img_url]);

  return equipment;
}

async function deleteEquipament(id){

  const equipment = await db.query(
    `delete from equipment where id_equipment = `+ id + `;`);

  return equipment;
}

  async function editEquipment(body){
    const equipment = await db.query(
      `update equipment set name_equipment = ?, quantity_equipment = ?, descr_equipment = ? img_url_equipment = ? where id_equipment = ?;`,
      [body.name, body.quantity, body.descr, body.img_url,body.id]);
  
    return equipment;
  }


module.exports = {
  getAll,
  getById,
  addEquipament,
  deleteEquipament,
  editEquipment
}