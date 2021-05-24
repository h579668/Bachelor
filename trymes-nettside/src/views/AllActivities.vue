<script src="//unpkg.com/vue/dist/vue.js"></script>
<script src="//unpkg.com/element-ui@2.15.1/lib/index.js"></script>
<template>
<div id="app">

<div id="activityTable">
  <table>
    <thead>
      <tr>
        <th>Aktivitetsnavn</th>
        <th >Forbund</th>
        <th>Email</th>
      </tr>
    </thead>
    
  <tbody v-for="ass in associations" 
  :key="ass.associations_id">
    <tr v-for="act in ass.activities" :key="act.activities_id" >
      <td> {{act.activities_name}}</td>
      <td> {{ass.associations_name}}</td>
      <td> {{act.email}}</td> 
    </tr>
  </tbody>
  </table>
</div>


  </div>
</template>

<script>
// @ is an alias to /src
//Is not going to be like this...
//import Categories from "@/views/Categories.vue";
import AssociationDataService from "@/services/AssociationDataService.js";

export default {
  name: "AllActivities",

  //components: {

  //Categories,
  //},
  data() {
    return {
      associations: [],
      associations_name: "",
      activities_name: "",
      telephone: "",
      email: "",
      activities:[],
      list_of_results: "Liste over resultatene",
    };
  },
  computed: {
    activities() {
      console.log("HERE");
      let activities = {};
      this.associations.forEach((row) => {
        row.activities.forEach((activity) => {
          activities[activity.activities_name] = 1;
          console.log(activity.activities_name);
        });
      });
      return Object.keys(activities);
    },
    
  },
  methods: {
    //Method from bezcoders front end vue fullstack app. Link in readme
    //Getting all activities from database and storing them in activities table
    cellFormatter(row, col) {
      let key = JSON.parse(col.property);
      let d = row.activities.find(
        (r) => r.activities_name === key.activities_name
      );
     
      if (d && d[key.property]) {
        return d[key.property];
      }
      return "0";
    },
    
    retrieveAssociations() {
      AssociationDataService.getAll()
        .then((response) => {
          this.associations = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    //Refreshing the list
    refreshList() {
      this.retrieveAssociations();
    },
  },
  //Putting it on the page
  mounted() {
    this.retrieveAssociations();
  },
};
</script>

<style scoped>
#activityTable {
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

#activityTable header, #activityTable th{
  table-layout: fixed;
  display: block;
}

#activityTable tbody{
  display:block;
  width: 100%;
  overflow: auto;
  height: 100px;
}

#activityTable td, #activityTable th {
   border-bottom: 1px solid #ddd;
    padding: 8px;
}
#activittTable tr:nth-child(even) {
  background-color: #f2f2f2
}
#activityTable tr:hover {
  background-color: #ddd;
  }

#activityTable th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #548687;
  color: white;
}

</style>