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
// Find all Users Activities
//Find on specific user and the user´s answers
exports.findUserActivitiesById = (users_id) => {
  return User.findByPk(users_id ,{
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
    .then((user) => {
      return user;
    })
    .catch((err) => {
      console.log(">> Error while retrieving the user : ", err);
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
            score: arrayContent[i].score
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
