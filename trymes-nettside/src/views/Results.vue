<template>
  <div>
    <h1> {{ table_of_results }} </h1>
    <canvas id="activity-chart"></canvas>

    <div v-for="users in users_activities" :key="users.users_id">
      <ul v-for="act in user.activities" :key="act.activities_id">
        <li>Bruker ID: {{user.users_id}}, Aktivitetsnavn: {{ act.activities_name }},  Skår: {{ act.users_activitie.score }}, Prosent: {{ act.users_activitie.hit }}</li>
      </ul>
  </div>

  </div>
</template>

<script>
import Chart from "chart.js";
import activityChartData from "../activity-data.js";
import ActivityDataService from "@/services/ActivityDataService.js";
import UserActivityDataService from "@/services/UserActivityDataService.js";

export default {
  name: "Results",
    data(){
      return { 
        activityChartData: activityChartData,
        list_of_results: "Liste over resultatene",
        table_of_results: "Tabell over resultatene",/*
        
        Inital testing table
        activities: [
          { activity: "Skateboard", tel:"454 64 166", email:"henning@norb.no", associations: "Brettforbundet"}, 
          { activity: "Snøbrett", tel:"922 49 073", email:"magnus@snowboardforbundet.no", associations: "Brettforbundet"}, 
          { activity: "Baneskyting", tel:"975 92 754", email:"ofh@dfs.no", associations: "Det frivillige Skyttervesen (ingen tilknytning til NIF)"}, 
          { activity: "Fallskjermhopping", tel:"907 04 646", email:"janerik.wang@nlf.no", associations: "Luftsportforbundet"}, 
          { activity: "Bueskyting", tel:"-", email:"-", associations: "NIF/Norges Bueskytterforbund. Og Norsk Langbuelag (NL)"}, 
          { activity: "Enduro motorsykkel", tel:"415 64 430", email:"a.sletholt@gmail.com", associations: "NMF"}, 
          { activity: "Aikido", tel:"918 64 797", email:"idalagosandersen@gmail.com", associations: "Norges Aikidoforbund"}, 
          { activity: "Amerikansk fotball", tel:"472 01 596", email:"tone.sparby@nif.idrett.no", associations: "Norges amerikanske idretters forbund"},  
          { activity: "Cheerleading", tel:"986 66 494", email:"daniela.ohnstad@nif.idrett.no", associations: "Norges amerikanske idretters forbund"},  
          { activity: "Freesbeegolf", tel:"454 64 166", email:"tone.sparby@nif.idrett.no", associations: "Norges amerikanske idretters forbund"}, 
        ],*/
        
         //Must be spelled correctly like models in the database
        activities: [],
        activities_name:"",
        score: "",
        hit:"",

        users_activities: [],
        //telephone: "",
        //email:"",
        //activities_comments:"",

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
.tableActivity {
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
}
table th, table td{
        padding: 10px; /* Apply cell padding */
    }
tbody {
  text-align: left;
}

li {
  list-style-type: none;
}
</style>
