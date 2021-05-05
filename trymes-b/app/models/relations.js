const Age = require("./age_interval.model.js")(sequelize, Sequelize);
const Acitivty = require("./activiy.model.js")(sequelize, Sequelize);
const Acitivty_Feature = require("./activiy_feature.model.js")(sequelize, Sequelize);
const Area = require("./area.model.js")(sequelize, Sequelize);

const User = require("./user.model.js")(sequelize, Sequelize);
const User_Acitivty = require("./user_activiy.model.js")(sequelize, Sequelize);
const User_Feature = require("./user_feature.model.js")(sequelize, Sequelize);


User.belongsToMany(Activity, { through: User_Activity});
Activity.belongsToMany(User, {through: User_Activity});

User.belongsToMany(Feature, { through: User_Feature});
Feature.belongsToMany(User, {through: User_Feature});

User.hasOne(Age);
User.hasOne(Area);