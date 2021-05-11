<template>
     <div>
        <h1> {{msg}} </h1>
        <table class="tableActivity">
            <thead>
                <tr>
                    <th rowspan="2">Aktivitet</th>
                    <th colspan="2" v-for="(item, index) in categories" :key="index">{{ item.categories_name }}</th>
                </tr>
                <tr>
                    <th v-for="(item, index) in features" :key="index">{{ item.features_name }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in activities" :key="index">
                    <td>{{ item.activities_name }}</td>
                    <td>1</td>
                    <td>3</td>
                    <td>2</td>
                    <td>1</td>
                    <td>2</td>
                    <td>2</td>
                    <td>3</td>
                    <td>3</td>
                </tr>
            </tbody>
        </table>
        
    </div>
</template>

<script>
import ActivityDataService from "@/services/ActivityDataService.js";
import CategoryDataService from "@/services/CategoryDataService.js";
import FeatureDataService from "@/services/FeatureDataService.js";

  export default {
    name: "ActivityList",
    props: {
      msg: String,
    },
    data(){
      return { 
        activities: [],
        activities_name: "",

        categories: [],
        categories_name: "",

        features: [],
        features_name: "",
      };
    },
    methods: {
      retrieveActivities() {
        ActivityDataService.getAll()
            .then(response => {
            this.activities = response.data;
            console.log(response.data);
          })
          .catch(e => {
          console.log(e);
        });
      },
      retrieveCategories() {
        CategoryDataService.getAll()
            .then(response => {
            this.categories = response.data;
            console.log(response.data);
          })
          .catch(e => {
          console.log(e);
        });
      },
      retrieveFeatures() {
        FeatureDataService.getAll()
            .then(response => {
            this.features = response.data;
            console.log(response.data);
          })
          .catch(e => {
          console.log(e);
        });
      },
      refreshList() {
        this.retrieveActivities();
        this.retrieveCategories();
        this.retrieveFeatures();
      
      },
    },
    mounted() {
      this.retrieveActivities();
      this.retrieveCategories();
      this.retrieveFeatures();
    } 
  
};
</script>

<style scoped>
.tableList {
    padding-top: 30px;
    text-align: left;
    margin: auto;
}
.tableList, th, td {
    padding-right: 50px;
}


</style>