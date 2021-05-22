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
    schema: "user_tables",
    pool: {
      max: 5,  //maximum number of connection in pool
      min: 0,  //minimum number of connection in pool
      acquire: 30000, //maximum time, in milliseconds, that a connection can be idle before being released
      idle: 10000 //maximum time, in milliseconds, that pool will try to get connection before throwing error
    }

  };
