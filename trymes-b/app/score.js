'use strict';
const db = require("./models");
const Activity = db.activities;
const ActivityController = require("./controllers/activity.controller.js");

exports.calculate=async ()=>{

    const user_table = [1,2,3,2,2,2,3,1,1,1,1,0,0,0,0,1];

    let result = {};
    const activities_values = await ActivityController.findAllActivities();
    let table ={} ;
    activities_values.forEach( row => 
        row.features.forEach(activities_feature=> {
            table[activities_feature.activities_features_values]
        }));
    console.log(table.activities_feature);
    

    //consol={}e
    //.log(">> activities", JSON.stringify(activities_values, null, 2));

    for(let i = 0; i < this.table.length; i++){
        if(this.table[i].length!=null){
            console.log("GJENNOM FØRSTE LØKKE!!"  + table[i]);
           // for(let j = 0; j < JSON.stringify(activities_values[i],null,2)[i].length; j++){
             //   if(JSON.stringify(activities_values[i][j],null,2)!=null){
               //     console.log("GJENNOM ALLE LØKKENE");
                //}
            //}
        }
    }

   return result;

}

//export default calculate();