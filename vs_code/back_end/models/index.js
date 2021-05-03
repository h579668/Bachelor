const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.USER, dbConfig.USERNAME,dbConfig.PASSWORD, { 
  database: dbConfig.DATABASE,
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: dbConfig.port,
  operatorsAliases: 0,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

sequelize.authenticate().then(() => {
  console.log("Success!");
}).catch((err) => {
  console.log(err);
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tryMes = require("./activity.model.js")(sequelize, Sequelize);

module.exports = db;