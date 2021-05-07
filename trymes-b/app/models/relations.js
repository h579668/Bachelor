//const { associations } = require("./index.js");

module.exports = (sequelize, Sequelize) => {
const User = require("./user.model.js")(sequelize, Sequelize);
const Age = require("./age_interval.model.js")(sequelize, Sequelize);
const Activity = require("./activity.model.js")(sequelize, Sequelize);
const Area = require("./area.model.js")(sequelize, Sequelize);

const Feature = require("./feature.model.js")(sequelize, Sequelize);
const Category = require("./category.model.js")(sequelize, Sequelize);
const Association = require("./association.model.js")(sequelize, Sequelize);

//many-to-many tables
const User_Activity = require("./user_activity.model.js")(sequelize, Sequelize);
const User_Feature = require("./user_feature.model.js")(sequelize, Sequelize);
const Activity_Feature = require("./activity_feature.model.js")(sequelize, Sequelize);

//many-to-many relation (N-M) in a separate table
User.belongsToMany(Activity, { through: User_Activity });
Activity.belongsToMany(User, { through: User_Activity });

User.belongsToMany(Feature, { through: User_Feature });
Feature.belongsToMany(User, { through: User_Feature });

Activity.belongsToMany(Feature,{ through: Activity_Feature });
Feature.belongsToMany(Activity,{ through: Activity_Feature });

//many-to-many relation (N-M)
Association.belongsToMany(Area, { through: "association_area"});
Area.belongsToMany(Association, {through: "association_area" });

User.belongsToMany(Area, {through: "user_area"});
Area.belongsToMany(User, {through: "user_area"});

Activity.belongsToMany(Age, {through: "activity_age"});
Age.belongsToMany(Activity, {through: "activity_age"});

//one-to-one relation (1-1)
//User.belongsTo(Area);
//User.hasOne(Area);

//One-to-many relation (1-N)
Feature.belongsTo(Category);
Category.hasMany(Feature);

Activity.belongsTo(Association);
Association.hasMany(Activity);

User.belongsTo(Age, {
    foreignKey: {
        name: 'age_id'
    }
});
Age.hasMany(User, {
    foreignKey: {
        name: 'age_id'
    }
});}
