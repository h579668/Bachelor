const User = require("./user.model.js")(sequelize, Sequelize);
const Age = require("./age_interval.model.js")(sequelize, Sequelize);
const Activity = require("./activity.model.js")(sequelize, Sequelize);
const Area = require("./area.model.js")(sequelize, Sequelize);

const Feature = require("./feature.model.js")(sequelize, Sequelize);
const Category = require("./category.model.js")(sequelize, Sequelize);
const Assosiation = require("./assosiation.model.js")(sequelize, Sequelize);

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
Assosiation.belongsToMany(Area);
Area.belongsToMany(Assosiation);

Activity.belongsToMany(Age);
Age.belongsToMany(Activity);

//one-to-one relation (1-1)
User.hasOne(Age);
User.hasOne(Area);

//One-to-many relation (1-N)
Feature.hasOne(Category);
Category.belongsToMany(Feature);

Activity.hasOne(Assosiation);
Assosiation.belongsToMany(Activity);