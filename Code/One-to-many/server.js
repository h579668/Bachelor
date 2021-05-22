const db = require("./app/models");
const controller = require("./app/controllers/category.controller");

const run = async () => {
  const cat1 = await controller.createCategory({
    categories_name: "Fysiske egenskaper",
  });

  const cat2 = await controller.createCategory({
    categories_name: "Koordinative egenskaper"
  });

  const feat1 = await controller.createFeature(cat1.id, {
    features_name: "bezkode",
  });

  await controller.createFeature(cat1.id, {
    features_name: "zkoder",
  });

  const feat2 = await controller.createFeature(cat2.id, {
    features_name: "aKoder",
  });

  await controller.createFeature(cat2.id, {
    features_name: "anotherKoder",
  });

  const cat1Data = await controller.findCategoryById(cat1.id);
  console.log(
    ">> Category id=" + cat1Data.id,
    JSON.stringify(cat1Data, null, 2)
  );

  const cat2Data = await controller.findCategoryById(cat2.id);
  console.log(
    ">> Category id=" + cat2Data.id,
    JSON.stringify(cat2Data, null, 2)
  );

  const feat1Data = await controller.findFeatureById(feat1.id);
  console.log(
    ">> Feature id=" + feat1.id,
    JSON.stringify(feat1Data, null, 2)
  );

  const feat2Data = await controller.findFeatureById(feat2.id);
  console.log(
    ">> Feature id=" +  feat2.id,
    JSON.stringify(feat2Data, null, 2)
  );

  const Categories = await controller.findAll();
  console.log(">> All Categorys", JSON.stringify(Categories, null, 2));
};
/*
const run = async () => {
  /*const cat1 = await controller.createCategory({
    title: "cat#1",
    description: "cat#1 Description",
  });

  const cat2 = await controller.createCategory({
    title: "cat#2",
    description: "cat#2 Description",
  });

  const Feature1 = await controller.createFeature(cat1.id, {
    name: "bezkoder",
    text: "Good job!",
  });

  await controller.createFeature(cat1.id, {
    name: "zkoder",
    text: "One of the best cats!",
  });

  const Feature2 = await controller.createFeature(cat2.id, {
    name: "aKoder",
    text: "Hi, thank you!",
  });

  await controller.createFeature(cat2.id, {
    name: "anotherKoder",
    text: "Awesome cat!",
  });

  const cat1Data = await controller.findCategoryById(cat1.id);
  console.log(
    ">> Category id=" + cat1Data.id,
    JSON.stringify(cat1Data, null, 2)
  );

  const cat2Data = await controller.findCategoryById(cat2.id);
  console.log(
    ">> Category id=" + cat2Data.id,
    JSON.stringify(cat2Data, null, 2)
  );

  const Feature1Data = await controller.findFeatureById(Feature1.id);
  console.log(
    ">> Feature id=" + Feature1.id,
    JSON.stringify(Feature1Data, null, 2)
  );

  const Feature2Data = await controller.findFeatureById(Feature2.id);
  console.log(
    ">> Feature id=" + Feature2.id,
    JSON.stringify(Feature2Data, null, 2)
  );

  const Categorys = await controller.findAll();
  console.log(">> All Categorys", JSON.stringify(Categorys, null, 2));
};*/


//db.sequelize.sync();
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
  run();
});