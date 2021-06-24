const { response } = require("express");
const { sequelize } = require("../models");
const db = require("../models");
const User = db.users;
const Feature = db.features;
const Area = db.areas;
const Activity = db.activities;

const ActivityController = require("./activity.controller.js");
const UserController = require("./user.controller.js");

const Op = db.Sequelize.Op;
const score = require("../score.js");

// Find all Users answers
exports.findAllUsersActivities = (req,res) => {
  return User.findAll({
    include: [
      {
        model: Activity,
        as: "activities",
        attributes: ["activities_id", "activities_name"],
        through: {
          attributes: ["hit", "score"],
        },
      },
    ],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
        err.message || ">> Error while getting user"
      })});
};

// Find all Users Activities
//Find one specific user and the user´s answers
exports.findOneUserAnswers = (req,res) => {
  let id = req.params.id;
  console.log("------------------")
  console.log(id)
  console.log("------------------")

  User.findOne( { 
    where: { 
      users_id : id
    },
    include: [
      {
        model: Activity,
        as: "activities",
        attributes: ["activities_id", "activities_name"],
        through: {
          attributes: ["hit", "score", "relevant"],
        },
        order:[[
          [Activity, "activities_name","ASC"]
        ]]
      },
    ],
  })
    .then((data) => {
      res.send(data);
      //console.log(data)
      //console.log(" USER FOUND ")
    })
    .catch((err) => {
      res.status(500).send({
        message:
        err.message || ">> Error while getting user"
       })
    //   console.log(">> Error while retriving: ", err);
    
      });
};

//addScore in the m:m relation
exports.addActivity = async(req,res) => {
  const users_id = req.body.users_id

  const scoreTable = await score.calculate(users_id)
  let arrayContent = Object.values(scoreTable);

  console.log(JSON.stringify(arrayContent[0]));

  User.findByPk(users_id)
  .then((user) => {
    if(!user){
      console.log("User not found!" + user);
      return null;
    }
  
    for(let i = 0; i < arrayContent.length; i++){
    
    let activities_id =  arrayContent[i].activities_id

      Activity.findByPk(activities_id).then((activity) => {

        if(!activity){
          console.log("Activity not found!");
          return null;
        }
        user.addActivity(activity, { 
          through: {
            hit: arrayContent[i].hit,
            score: arrayContent[i].score,
            relevant: arrayContent[i].relevant
          }
        });
        
       //console.log(">> ERROR while adding activity scores to user");
      });
    }
    res.send(user);
    })
    .catch((err) => {
      res.status(500).send({
        message:
        err.message || ">> Error while adding activity to user"
       })/*
       console.log(">> Error while adding Activity to user: ", err);
      */
      });
};
