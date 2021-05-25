const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.USER, dbConfig.USERNAME,dbConfig.PASSWORD, { 
  database: dbConfig.DB,
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: dbConfig.port,
  schema: dbConfig.schema,
  operatorsAliases: 0,
  define:{ timestamps:false },

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

// Checking if it connects correctly to the database
sequelize.authenticate().then(() => {
  console.log("Success!");
}).catch((err) => {
  console.log(err);
});

// Creates an object and putting the information above inside it
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.activity = require("./activity.model.js")(sequelize, Sequelize);
db.feature = require("./feature.model.js")(sequelize, Sequelize);
db.activities_features = require("./activity_feature.model.js")(sequelize, Sequelize);

db.feature.belongsToMany(db.activity, {
  through: db.activities_features,
  as: "activities",
  foreignKey: "features_id",
});
db.activity.belongsToMany(db.feature, {
  through: db.activities_features,
  as: "features",
  foreignKey: "activities_id",
});

module.exports = db;
