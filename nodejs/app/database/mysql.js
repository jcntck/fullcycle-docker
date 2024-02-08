const mysql = require('mysql');
const config = require("../config/config");

module.exports = class MySqlAdapter {
  #connection;
  
  connect() {
    this.#connection = mysql.createConnection(config);
  }

  async purge() {
    try {
      await this.#connection.query(`truncate table people;`);
    } catch(err) {
      console.error(err);
    }
  }

  async insert(name) {
    try {
      await this.#connection.query(`INSERT INTO people(name) VALUES(?);`, [name]);
    } catch(err) {
      console.error(err);
    }
  }

  async select() {
    return new Promise((resolve, reject) => {
      this.#connection.query(`SELECT * FROM people;`, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  close() {
    this.#connection.end();
  }
}