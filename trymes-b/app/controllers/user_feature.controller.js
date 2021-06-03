const { response } = require("express");
const { sequelize } = require("../models");
const db = require("../models");
const User = db.users;
const Feature = db.features;
const Area = db.areas;
const Activity = db.activity;
const Age = db.age_intervals;
const Op = db.Sequelize.Op;

const ActivityController = require("./activity.controller.js");
const UserController = require("./user.controller.js");
const score = require("../score.js");

//addFeature in the m:m relation
exports.addFeature = (req, res) => {
  let users_id = req.body.users_id;
  let features = req.body.features;
  let numbers = 0;

  console.log("USERS_ID " + req.body.users_id)

  User.findByPk(users_id)
  .then((user) => {
    if(!user){
      console.log("User not found!" + user);
      return null;
    }
    for(let i = 0; i < features.length; i++){
      Feature.findByPk(i+1).then((feature) => {
        if(!feature){
          console.log("Feature not found!");
          return null;
        }
        numbers = features[i]

        user.addFeature(feature, { 
          through: {
            users_features_values:numbers
          }
        });
        //console.log(`>> added Feature id=${feature.features_id} to User id=${user.id} where values equals=${numbers}`);
        
       // res.send(user);
      });
    } 
    res.send(user);
    })
    .catch((err) => {
      res.status(500).send({
        message:
        err.message || ">> Error while finding activities"
       })
    });

};

//addScore in the m:m relation
exports.addActivity = async(req,res) => {
  let users_id = req.body.users_id

  let result = [];

  //Getting all activities
  const activities_values = await ActivityController.findAllActivities();
  //Getting users_features values
  const user_table = await UserController.findOneUserAnswersById(users_id)

  //scoreTable
  scoreTable = looping(activities_values, user_table);

  User.findByPk(users_id)
  .then((user) => {
    if(!user){
      console.log("User not found!" + user);
      return null;
    }
  
    console.log(">> user in add", JSON.stringify(scoreTable, null, 2));

   for(let i = 0; i < scoreTable.length; i++){
      Activity.findByPk(i+1).then((activity) => {
        if(!activity){
          console.log("Activity not found!");
          return null;
        }
    
        user.addActivity(activity, { 
          through: {
            hit: scoreTable[i].hit,
            score: scoreTable[i].score
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
       })
      });
};

//A looping method to calculate a score with the user´s answers compared to the activities
function looping (activities_values, user_table) {
    let table ={};
    
    //Looping through all activities
    for(let i = 0; i <  activities_values.length; i++){
        if(activities_values[i].features.length!=null){
           
            /*
            * Creating a new table for each activity
            * conatains each activity´s name, id and userscore and userhit
            */
           table[i]= { 
                activities_id: activities_values[i].activities_id,
              //  activities_name: activities_values[i].activities_name,
                score:0,
                hit:0
           }
           //Is reset for each activity --> is necessary
           let totalValue=0; 
           
           /*
           * Looping through all features in each activity
           * Then getting the activities value for each feature in order to compare it with the user´s answers
           */ 
            for(let j = 0; j < activities_values[i].features.length && j < 16; j++){
                let value= activities_values[i].features[j].activities_feature.activities_features_values;
                let userValue = user_table.features[j].users_feature.users_features_values  
                    /*
                    * Must calculate the absolute number here, in order to prevent negative numbers
                    * Also sums up a sum for all the features in one activity at a time
                    * and to make sure it calculates the correct score
                    */
                    totalValue += Math.abs(userValue-value);
            }   

            //calculating the percentage of the totalValue
            let totalHit = ((42-totalValue)/42)*100;
            
            //Adding the calculations to the table
            table[i].score=(totalValue);
            table[i].hit=(parseFloat(totalHit).toFixed(2)+"%");

           
}}
   // console.log(">> table", JSON.stringify(table, null, 2));
    return table;
}
/*
exports.getAUsersScores = (req,res) =>{
  let users_id = req.body.users_id;

  score.calculate(users_id); 
  User.findAll({
    include: [{
      model: Activity,
      as: "activities",
      attributes: ["activities_id", "activities_name"],
      through: {
        attributes: ["hit", "score"]
      }
    }]
  }).then((users) => {
    res.send(users);
  })
  .catch((err) => {
    console.log(">> Error while retrieving users: ", err);
  });
}

*/


/*
//Get the activity for a given activity id
exports.storeUsersScore = (users_id) => {

  //Finding the users_features and calculating the result
  const users_score = async() => { await score(users_id) };

  User.put(users_id)
  


    .then((data) => {
        

      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
        err.message || ">> Error while finding activities"
       })
      //console.log(">> Error while finding activities: ", err);
    });
};*/

/* Create and Save a new User_Feature
exports.create = (req, res) => {
  // Validate request
  if (!req.body.us_fe_value) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a User_Feature
  const user_feature = {
    us_fe_value: req.body.us_fe_value,
  };

  // Save User_Feature in the database
  User_Feature.create(user_feature)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User_Feature."
      });
    });
};



// Find an single User_Feature with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    User_Feature.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving User_Feature with id=" + id
        });
      });
};

// Update a User_Feature by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    User_Feature.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User_Feature was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update User_Feature with id=${id}. Maybe User_Feature was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating User_Feature with id=" + id
        });
      });
};

// Delete a User_Feature with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    User_Feature.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User_Feature was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete User_Feature with id=${id}. Maybe User_Feature was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete User_Feature with id=" + id
        });
      });
};

// Delete all Users_Features from the database.
exports.deleteAll = (req, res) => {
  User_Feature.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Users_Features were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Users_Features."
          });
        })
};*/