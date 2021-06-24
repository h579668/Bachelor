'use strict';
const db = require("./models");
const Activity = db.activities;
const User = db.users;
const Feature = db.features;
const ActivityController = require("./controllers/activity.controller.js");
const UserController = require("./controllers/user.controller.js");
const UserFeatureController = require("./controllers/user_feature.controller.js");

const { activities_features } = require("./models");

exports.calculate= async ( users_id)=>{
      /* first testing object
    *const user_table = [1,2,3,2,2,2,3,1,1,1,1,1,1,1,1,1];
    let userScore = user_table.reduce((a,b) => {
        return a+b
    });
     */

   // let users_id = 2;
    let result = [];
    const activities_values = await ActivityController.findAllActivities();

    // second testing object
    
    const user_table = await UserController.findOneUserAnswersById(users_id)

   
    //A Test to check that we´re getting the correct values
    //console.log(user_table.features[0].users_feature.users_features_values)
    //let result = [];
    result = looping(activities_values, user_table);

   // const store = await UserFeatureController.addActivity(result, users_id);
   //console.log(">> user", JSON.stringify(result, null, 2));
   return result;
    
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
                hit:0,
                relevant:0
           }
           //Reset for each activity 
           let totalValue=0; 
           let totalRelevance = 1;
           
           
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
                let absoluteValue = Math.abs(userValue-value);
                totalValue += absoluteValue;

                   /* calculating relevance out of physical features */
                if(j > 12 && totalRelevance == 1 && absoluteValue == 2 ){
                    totalRelevance = 0;
                }
                    
            }
            
            /* calculating relevance out of pshycological features
            * but only if the activity is relevant after the physical
            */
            if(totalRelevance == 1){
              for(let k = 16; k < activities_values[i].features.length  &&  k< 26; k++){
                let activity_value = activities_values[i].features[k].activities_feature.activities_features_values;
                let user_values = user_table.features[k].users_feature.users_features_values;
                
                if(user_values == 0 && activity_value == 1){
                  totalRelevance = 0;
                }
              }
            }
            /*looping in order to check that the activity is relevant for the user 
            for(let k = 16; k < activities_values[i].features.length; k++){
              let value= activities_values[i].features[k].activities_feature.activities_features_values;
              let userValue = user_table.features[k].users_feature.users_features_values 
              
              if(totalRelevance == 1 && Math.abs(userValue-value) == 2){
                totalRelevance = 0;
              } 
            }*/

            /*calculating the percentage of the totalValue */
            let totalHit = ((42-totalValue)/42)*100;
            
            //Adding the calculations to the table
            table[i].score=(totalValue);
            table[i].hit=(parseFloat(totalHit).toFixed(2)+"%");
            table[i].relevant=(totalRelevance);

           
}}
   // console.log(">> table", JSON.stringify(table, null, 2));
    return table;
}

