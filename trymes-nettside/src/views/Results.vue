<template>
  <div>
    <h1> {{ table_of_results }} </h1>
    <canvas id="activity-chart"></canvas>
    <ResultsList :list_of_results="list_of_results" />
  </div>
</template>

<script>
import Chart from "chart.js";
import activityChartData from "../activity-data.js";
import ActivityDataService from "@/services/ActivityDataService.js";
export default {
  name: "Restults",
    data(){
      return { 
        activityChartData: activityChartData,
        list_of_results: "Liste over resultatene",
        table_of_results: "Tabell over resultatene",/*
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
        
        activities: [],
        activities_name:"",
        telephone: "",
        email:"",
        activities_comments:"",

      };
    },
    methods: {
      retrieveLabels() {
        ActivityDataService.getAll()
            .then(response => {
            this.activities = response.data;
            console.log(response.data);
          })
          .catch(e => {
          console.log(e);
        });
      },
      refreshList() {
        this.retrieveLabels();
      
      },
    },
    mounted() {
      this.retrieveLabels();
      const ctx = document.getElementById("activity-chart");
    new Chart(ctx, this.activityChartData);
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

