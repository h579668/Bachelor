<!--This file is used to display all the activities registerd in the database-->
<script src="//unpkg.com/vue/dist/vue.js"></script>
<script src="//unpkg.com/element-ui@2.15.1/lib/index.js"></script>
<template>
  <div id="app">
    <TableData>
      <thead>
        <tr>
          <th>Aktivitetsnavn</th>
          <th>Forbund</th>
          <th>Email</th>
        </tr>
      </thead>
      <template v-if="ready">
      <tbody>
        <tr v-for="act in activities" :key="act" >
          <td> {{ act.activities_name }} </td>
          <td > {{ act.associations.associations_name}} </td>
          <td> {{ act.email }}</td> 
        </tr>
      </tbody>
      </template>
      
    </TableData>
    
  </div>
</template>

<script>
// @ is an alias to /src
//Is not going to be like this...
//import Categories from "@/views/Categories.vue";
import ActivityDataService from "@/services/ActivityDataService.js";
import TableData from "@/components/Table.vue";

export default {
  name: "AllActivities",

  components: {
    TableData
  },

  //Categories,
  //},
  data() {
    return {
      ready: false,
      
      
      activities_name: "",
      telephone: "",
      email: "",
      activities:[],
      list_of_results: "Liste over resultatene",
    };
  },
  /*computed: {
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
    
  },*/
  methods: {
    //Method from bezcoders front end vue fullstack app. Link in readme
    //Getting all activities from database and storing them in activities table
    /*cellFormatter(row, col) {
      let key = JSON.parse(col.property);
      let d = row.activities.find(
        (r) => r.activities_name === key.activities_name
      );
     
      if (d && d[key.property]) {
        return d[key.property];
      }
      return "0";
    },*/
    
    retrieveActivities() {
      ActivityDataService.getAllAssociations()
        .then((response) => {
          this.activities = response.data;
          this.ready = true;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    //Refreshing the list
    refreshList() {
      this.retrieveActivities();
    },
  },
  //Putting it on the page
  mounted() {
    this.retrieveActivities();
  },
};
</script>

<style scoped>


</style>