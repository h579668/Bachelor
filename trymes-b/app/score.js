'use strict';
const db = require("./models");
const Activity = db.activities;
const ActivityController = require("./controllers/activity.controller.js");
const { activities_features } = require("./models");

exports.calculate= async ()=>{
    const activities_values = await ActivityController.findAllActivities();
    const user_table = [1,2,3,2,2,2,3,1,1,1,1,1,1,1,1,1];

    let userScore = user_table.reduce((a,b) => {
        return a+b
    });

    let result = looping(activities_values,userScore, user_table);

    return result;

};

//A looping method to calculate a score with the user´s answers compared to the activities
const looping = (activities_values, userScore, user_table) => {
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
                activities_name: activities_values[i].activities_name,
                score:0,
                hit:0
           }
           //Must be reset for each activity
           let totalValue=0; 
           
           /*
           * Looping through all features in each activity
           * Then getting the activities value for each feature in order to compare it with the user´s answers
           */ 
            for(let j = 0; j < activities_values[i].features.length && j < 16; j++){
                let value= activities_values[i].features[j].activities_feature.activities_features_values;
                    
                    /*
                    * Must calculate the absolute number here, in order to prevent negative numbers
                    * Also sums up a sum for all the features in one activity at a time
                    * and to make sure it calculates the correct score
                    */
                    totalValue += Math.abs(user_table[j]-value);

            }   

            //calculating the percentage of the totalValue
            let totalHit = ((42-totalValue)/42)*100;
            
            //Adding the calculations to the table
            table[i].score=(totalValue);
            table[i].hit=(parseFloat(totalHit).toFixed(2)+"%");

            console.log(table[i]);
}}
   
    return table;
}

