const sql = require("./db.js");

const ScoutUser = function(scoutuser) {
    this.name_scout_user = ScoutUser.name;
    this.birth_scout_user = ScoutUser.birth;
    this.gender_Scout_user = ScoutUser.gender;
    this.phone_scout_user = ScoutUser.phone;
    this.adress_scout_user = ScoutUser.adress;
    this.active_scout_user = ScoutUser.active;
    this.nin_scout_user = ScoutUser.nin;
    this.phone_ee_scout_user = ScoutUser.phoneEe;
    this.url_img_scout_user = ScoutUser.urlImg;
    this.scout_login_id_scout_login = ScoutUser.idLogin;
    this.scout_team_id_scout_team = ScoutUser.idTeam;
    this.zip_code_id_zip_code = ScoutUser.zipCode;
  };
 
  /*
  ScoutUser.create = (newScoutUser, result) => {
    sql.query("INSERT INTO scout_user SET ?", newScoutUser, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created Scout: ", { id: res.insertId, ...newCustomer });
      result(null, { id: res.insertId, ...newCustomer });
    });
  };*/
  
  /*
  ScoutUser.findById = (customerId, result) => {
    sql.query(`SELECT * FROM scout_user WHERE id_scout_user = ${customerId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found customer: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found Customer with the id
      result({ kind: "not_found" }, null);
    });
  };
  */
  ScoutUser.getAll = result => {
    sql.query("SELECT * FROM scout_user", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("scout: ", res);
      result(null, res);
    });
  };
  
  /*
  ScoutUser.updateById = (id, customer, result) => {
    sql.query(
      "UPDATE customers SET email = ?, name = ?, active = ? WHERE id = ?",
      [customer.email, customer.name, customer.active, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found Customer with the id
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("updated customer: ", { id: id, ...customer });
        result(null, { id: id, ...customer });
      }
    );
  };
  
  */

  /*
  ScoutUser.remove = (id, result) => {
    sql.query("DELETE FROM customers WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("deleted customer with id: ", id);
      result(null, res);
    });
  };
  */
  
  /*
  ScoutUser.removeAll = result => {
    sql.query("DELETE FROM customers", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log(`deleted ${res.affectedRows} customers`);
      result(null, res);
    });
  };
  */
  
  module.exports = ScoutUser;