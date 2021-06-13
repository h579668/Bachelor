<template>
  <div>
    <h1> {{ table_of_results }} </h1>
    <canvas id="activity-chart"></canvas>

    <TableData>
      <thead>
        <tr>
          <td>Bruker ID:</td>
          <td>Aktivitetsnavn</td>
          <td>Skår</td>
          <td>Prosent</td>
        </tr>
      </thead>
      <tbody >
        <div v-for="user in users_activities" :key="user.users_id">
          <tr v-for="act in user.activities" :key="act.activities_id">
            <td> {{user.users_id}}</td>
            <td> {{act.activities_name}}</td>
            <td> {{act.users_activitie.score}}</td>
            <td> {{act.users_activitie.hit}}</td>
          </tr>
        </div>
      </tbody>
    </TableData>

  </div>
</template>

<script>
import Chart from "chart.js";
import activityChartData from "@/activity-data.js";
//import ActivityDataService from "@/services/ActivityDataService.js";
import UserActivityDataService from "@/services/UserActivityDataService.js";

import TableData from "@/components/Table.vue";

export default {
  name: "Results",
  components: {
        TableData
      },
    data(){
      return { 
        activityChartData: activityChartData,
        list_of_results: "Liste over resultatene",
        table_of_results: "Tabell over resultatene",
        
         //Must be spelled correctly like models in the database
        activities: [],
        activities_name:"",
        score: "",
        hit:"",

        users_activities: [],

        user : null

      };
    },
    methods: {
    checkSession() { 
    if(!this.$session.exists()){
      this.$router.push('/');
    }else if(this.$session.get("user")){
        this.user = this.$session.get("user")
        console.log("I SESSION " + this.user);
    } 
    
    },

      //Method from bezcoders front end vue fullstack app. Link in readme
      //Getting all activities from database and storing them in activities table
      retrieveActivities() {
        UserActivityDataService.findAllUsersActivities()
            .then(response => {
            this.users_activities= response.data;
            console.log(response.data);
          })
          .catch(e => {
          console.log(e);
        });
        },
            
    refreshList() {
      this.retrieveActivities();
    },
  },

  mounted() {
    this.retrieveActivities();
    
    const ctx = document.getElementById("activity-chart");
    new Chart(ctx, this.activityChartData);

  },
    
  created: function(){
    this.checkSession();
  } 
};
</script>

<style scoped>
#activity-chart {
  max-width: 60%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
}

TableData {
  width: 100%;
}

</style>
