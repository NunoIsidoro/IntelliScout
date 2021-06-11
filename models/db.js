// conectar a base de dados e correr queries

const mysql = require('mysql2');
const dbConfig = require('../config/dbconfig');



async function query(sql, params) {
  const connection = await mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
  });

  // open the MySQL connection
  connection.connect(error => {
    if (error) throw error;
    console.log("Conectado há base de dados com sucesso.\n");
  });

  const [results, ] = await connection.execute(sql, params);

  return results;
}

module.exports = {
  query
}