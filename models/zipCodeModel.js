const db = require("./db.js");

// this function return all scouts on DB
async function getAll(){
  const zipCode = await db.query(
    `SELECT *
    FROM zip_code`);

  return zipCode;
}

// this function
async function getById(id){

  const zipCode = await db.query(
    `SELECT * 
    FROM zip_code 
    WHERE id_zip_code = ?`, [id]);

  return zipCode;
}

async function addZipCode(body){

  console.log(body.district);
  console.log(body.abbr);
  console.log(body.id);

  const zipCode = await db.query(
    `insert into zip_code 
    (id_zip_code, district_zip_code, abbr_zip_code) values (?, ?, ?);`,
       [body.id, body.district, body.abbr]);

  return zipCode;
}

async function deleteZipCode(id){

  const zipCode = await db.query(
    `delete from zip_code where id_zip_code = `+ id + `;`);

  return zipCode;
}

  async function editZipCode(body){

    const zipCode = await db.query(
      `update zip_code set district_zip_code = ?, abbr_zip_code = ? where id_zip_code = ?;`,
      [body.district, body.abbr, body.id]);
  
    return zipCode;
  }


module.exports = {
  getAll,
  getById,
  addZipCode,
  deleteZipCode,
  editZipCode
}
