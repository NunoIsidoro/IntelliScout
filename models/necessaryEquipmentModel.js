const db = require("./db.js");

// this function return all scouts on DB
async function getAll(){
  const equipment = await db.query(
    `SELECT *
    FROM necessary_equipment_activity`,);

  return equipment;
}

// this function
async function getById(id_activity, id_equipment){

  const equipment = await db.query(
    `SELECT * 
    FROM necessary_equipment_activity 
    WHERE id_activity = ? AND id_equipment = ?`, [id_activity, id_equipment]);

  return equipment;
}

async function addEquipment (body){

  const equipment = await db.query(
    `insert into necessary_equipment_activity 
    (quantity_necessary_equipment_activity, id_activity, id_equipment) values (?, ?, ?);`,
       [body.quantity, body.id_activity, body.id_equipment]);
  return equipment;
}

async function deleteEquipment(id_activity, id_equipment){

  const equipment = await db.query(
    `delete from necessary_equipment_activity where id_activity = ? and id_equipment = ?`, [id_activity, id_equipment] );

  return equipment;
}

  async function editEquipment(body){

    const equipment = await db.query(
      `update necessary_equipment_activity set quantity_necessary_equipment_activity = ?, id_activity = ?, id_equipment = ? 
      where id_activity = ? and id_equipment = ?;`,
      [body.quantity, body.id_activity, body.id_equipment, body.id_activity, body.id_equipment]);
  
    return equipment;
  }


module.exports = {
  getAll,
  getById,
  addEquipment,
  deleteEquipment,
  editEquipment
}
