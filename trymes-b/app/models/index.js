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

//models starts with a
db.activities = require("./activity.model.js")(sequelize, Sequelize);
db.activities_features = require("./activity_feature.model.js")(sequelize, Sequelize);
db.age_intervals = require("./age_interval.model.js")(sequelize, Sequelize);
db.areas = require("./area.model.js")(sequelize, Sequelize);
db.associations = require("./association.model.js")(sequelize, Sequelize);

//models starts with c
db.categories = require("./category.model.js")(sequelize, Sequelize);

//models starts with f
db.features = require("./feature.model.js")(sequelize, Sequelize);

//models starts with u
db.users = require("./user.model.js")(sequelize, Sequelize);
db.users_activities = require("./user_activity.model.js")(sequelize, Sequelize);
db.users_features= require("./user_feature.model.js")(sequelize, Sequelize);

db.questions = require("./question.model.js")(sequelize, Sequelize);

/*******************Associations******************/

//Activities_Features table
db.activities.belongsToMany(db.features,{ 
  through: db.activities_features, 
  as: "features",
  foreignKey: "activities_id"
});

db.features.belongsToMany(db.activities,{ 
  through: db.activities_features, 
  as: "activities",
  foreignKey: "features_id"
  
});

//Activities_Age_Interval table
db.activities.belongsToMany(db.age_intervals, {
  through: "activities_age_interval",
  as: "age_intervals",
  foreignKey: "activities_id"
});
db.age_intervals.belongsToMany(db.activities, {
  through: "activities_age_interval",
  as:"activites",
  foreignKey: "age_id",
});

//AssociationFK is created in Activties
db.activities.belongsTo(db.associations, {
  foreignKey: "associations_id",
      as:"associations"
  
});
db.associations.hasMany(db.activities, {
  foreignKey:"associations_id",
  as: "activities"
});

//AgeFK is created in User
db.users.belongsTo(db.age_intervals, {
  foreignKey: {
      name: "age_id",
      as:"age_intervals"
  }
});
db.age_intervals.hasMany(db.users, {
  foreignKey: {
      name: "age_id"
  }
});

//AreaFK is created in User
db.users.belongsTo(db.areas, {
  foreignKey: "areas_id",
  as: "areas"
});

db.areas.hasMany(db.users, {
  foreignKey: "areas_id"
});

//Associations_Area table
db.associations.belongsToMany(db.areas, { 
    through: "associations_areas",
    as:"areas",
    foreignKey:"associations_id"
    
});
db.areas.belongsToMany(db.associations, {
    through: "associations_areas",
    as: "associations",
    foreignKey: "areas_id"
}
);

//Users_Activities table
db.users.belongsToMany(db.activities, { 
  through: db.users_activities,
  as: "activities",
  foreignKey: "users_id"
});

db.activities.belongsToMany(db.users, { 
  through: db.users_activities, 
  as: "users",
  foreignKey: "activities_id"
});

//Users_Features table
db.users.belongsToMany(db.features, { 
  through: db.users_features,
  as: "features",
  foreignKey: "users_id"
});
db.features.belongsToMany(db.users, { 
  through: db.users_features,
  as: "users",
  foreignKey: "feature_id"
  
});

//CategoriesFK is created in Features
db.features.belongsTo(db.categories, {
  foreignKey:"categories_id",
      as: "categories",
});
db.categories.hasMany(db.features, {
  foreignKey: "categories_id",
      as: "features"
});


//db.relations = require("./relations.js")(sequelize, Sequelize);

module.exports = db;
