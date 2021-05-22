const db = require("../models");
const Category = db.categories;
const Feature = db.features;

// Create and Save new Tategorys
exports.createCategory = (category) => {
  return Category.create({
    categories_name: category.categories_name,
  })
    .then((category) => {
      console.log(">> Created category: " + JSON.stringify(category, null, 4));
      return category;
    })
    .catch((err) => {
      console.log(">> Error while creating category: ", err);
    });
};

// Create and Save new Features
exports.createFeature = (categories_id, feature) => {
  return Feature.create({
    features_name: feature.features_name,
    categories_id: categories_id,
  })
    .then((feature) => {
      console.log(">> Created feature: " + JSON.stringify(feature, null, 4));
      return feature;
    })
    .catch((err) => {
      console.log(">> Error while creating feature: ", err);
    });
};

// Get the features for a given category
exports.findCategoryById = (categories_id) => {
  return Category.findByPk(categories_id, { include: ["features"] })
    .then((category) => {
      return category;
    })
    .catch((err) => {
      console.log(">> Error while finding category: ", err);
    });
};

// Get the features for a given feature id
exports.findFeatureById = (features_id) => {
  return Feature.findByPk(features_id, { include: ["categories"] })
    .then((ceature) => {
      return ceature;
    })
    .catch((err) => {
      console.log(">> Error while finding feature: ", err);
    });
};

// Get all Categorys include ceatures
exports.findAll = () => {
  return Category.findAll({
    include: ["features"],
  }).then((categories) => {
    return categories;
  });
};