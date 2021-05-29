//const { associations } = require('./index.js');
//NOT CURRENTLY IN USE
module.exports = (sequelize, Sequelize) => {
const User = require('./user.model.js')(sequelize, Sequelize);
const Age = require('./age_interval.model.js')(sequelize, Sequelize);
const Activity = require('./activity.model.js')(sequelize, Sequelize);
const Area = require('./area.model.js')(sequelize, Sequelize);

const Feature = require('./feature.model.js')(sequelize, Sequelize);
const Category = require('./category.model.js')(sequelize, Sequelize);
const Association = require('./association.model.js')(sequelize, Sequelize);
const Question = require('./question.model.js')(sequelize, Sequelize);
const Question_Category = require('./questions_categories.model.js')(sequelize, Sequelize);

//many-to-many tables
const User_Activity = require('./user_activity.model.js')(sequelize, Sequelize);
const User_Feature = require('./user_feature.model.js')(sequelize, Sequelize);
const Activity_Feature = require('./activity_feature.model.js')(sequelize, Sequelize);

//many-to-many relation (N-M) in a separate table
//Users_Activities table
User.belongsToMany(Activity, { 
    through: User_Activity,
    as: 'activities',
    foreignKey: 'users_id'
});

Activity.belongsToMany(User, { 
    through: User_Activity, 
    as: 'users',
    foreignKey: 'activities_id'
});

//Users_Features table
User.belongsToMany(Feature, { 
    through: User_Feature,
    as: 'features',
    foreignKey: 'users_id'
});
Feature.belongsToMany(User, { 
    through: User_Feature,
    as: 'users',
    foreignKey: 'feature_id'
    
});

//Activities_Features table
Activity.belongsToMany(Feature,{ 
    through: Activity_Feature, 
    as: 'feeatures',
    foreignKey: 'activities_id'
});

Feature.belongsToMany(Activity,{ 
    through: Activity_Feature, 
    as: 'activities',
    foreignKey: 'features_id'
    
});

//Associations_Area table
Association.belongsToMany(Area, { 
    through: 'associations_areas',
    as:'areas',
    foreignKey:'associations_id'
    
});
Area.belongsToMany(Association, {
    through: 'associations_areas',
    as: 'associations',
    foreignKey: 'areas_id'
}
);
/*
User.belongsToMany(Area, {
    through: 'users_areas',
    as: 'areas',
    foreignKey: 'users_id'
});

Area.belongsToMany(User, {
    through: 'users_areas',
    as: 'users',
    foreignKey: 'areas_id' 
});*/

//Activities_Age_Interval table
Activity.belongsToMany(Age, {
    through: 'activities_age_interval',
    as: 'age_intervals',
    foreignKey: 'activities_id'
});
Age.belongsToMany(Activity, {
    through: 'activities_age_interval',
    as:'activites',
    foreignKey: 'age_id',
});

//one-to-one relation (1-1)
//User.belongsTo(Area);
//User.hasOne(Area);

//One-to-many relation (1-N)
//FeatureFK is created in Category
Feature.belongsTo(Category, {
    foreignKey:{
        name: 'categories_id'
    }
});
Category.hasMany(Feature, {
    foreignKey: {
        name:'categories_id'
    }
});

//ActivityFK is created in Association
Activity.belongsTo(Association, {
    foreignKey:{
        name: 'associations_id'
    }
});
Association.hasMany(Activity, {
    foreignKey: {
        name:'associations_id'
    }
});

//AgeFK is created in User
User.belongsTo(Age, {
    foreignKey: {
        name: 'age_id'
    }
});
Age.hasMany(User, {
    foreignKey: {
        name: 'age_id'
    }
});

//AreaFK is created in User
User.belongsTo(Area, {
    foreignKey: 'age_id'
});

Area.hasMany(User, {
    foreignKey: 'age_id'
});


//One-to-many relation (1-N)
//QuestionFK is created in Question_Category
Question.belongsTo(Question_Category, {
    foreignKey:{
        name: 'questions_category_id'
    }
});
Question_Category.hasMany(Question, {
    foreignKey: {
        name:'questions_category_id'
    }
});

}

