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

db.users = require("./user.model.js")(sequelize, Sequelize);
db.age_intervals = require("./age_interval.model.js")(sequelize, Sequelize);
db.activities = require("./activity.model.js")(sequelize, Sequelize);
db.activities_features = require("./activity_feature.model.js")(sequelize, Sequelize);
db.areas = require("./area.model.js")(sequelize, Sequelize);
db.features = require("./feature.model.js")(sequelize, Sequelize);
db.categories = require("./category.model.js")(sequelize, Sequelize);
db.users_activites = require("./user_activity.model.js")(sequelize, Sequelize);
db.users_features= require("./user_feature.model.js")(sequelize, Sequelize);
db.associations = require("./association.model.js")(sequelize, Sequelize);

module.exports = db;
