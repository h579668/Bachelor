<template>
  <div>
    <table class="tableActivity">
      <thead>
        <tr>
          <th>Aktivitet</th>
          <th>Telefon</th>
          <th>E-post</th>
          <th>Kommentar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in activities" :key="index">
          <td>{{ item.activities_name }}</td>
          <td>{{ item.telephone }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.activities_comments }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ActivityDataService from "@/services/ActivityDataService.js";
  export default {
    name: "ResultsList",
    props: {
      list_of_results:String,
    },
    data(){
      return { /*
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
    } 
};
</script>

<style scoped>
.tableActivity {
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
}

tbody {
  text-align: left;
}

li {
  list-style-type: none;
}
</style>
