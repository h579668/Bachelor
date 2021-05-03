/*
 * This is a script that contains all the necessary information in order to connect to the database.
 * It is used in models/index.js file.
*/
module.exports = {
    HOST: "data1.hib.no",
    USER: "TryMes",
    USERNAME: "TryMes",
    PASSWORD: "pass",
    DB: "TryMes",
    dialect: "postgres",
    port: 5434,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };