const db = require("./db.js");

// this function return all scouts on DB
async function getAll(){
  const local = await db.query(
    `SELECT *
    FROM locality`);

  return local;
}

// this function
async function getById(id){

  const local = await db.query(
    `SELECT * 
    FROM locality 
    WHERE id_local = ?`, [id]);

  return local;
}

async function addLocal(body){

  console.log(body.district);
  console.log(body.abbr);
  console.log(body.id);

  const local = await db.query(
    `insert into locality 
    (id_local, district_local, abbr_local) values (?, ?, ?);`,
       [body.id, body.district, body.abbr]);

  return local;
}

async function deleteLocal(id){

  const local = await db.query(
    `delete from locality where id_local = `+ id + `;`);

  return local;
}

  async function editLocal(body){

    const local = await db.query(
      `update locality set district_local = ?, abbr_local = ? where id_local = ?;`,
      [body.district, body.abbr, body.id]);
  
    return local;
  }


module.exports = {
  getAll,
  getById,
  addLocal,
  deleteLocal,
  editLocal
}
