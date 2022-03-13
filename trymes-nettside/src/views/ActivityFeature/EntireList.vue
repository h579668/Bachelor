<!--this file contains the code for displaying all activities with their features-->
<template>
  <div>
    <el-container>
      <el-header> 
        <AdminNav />
      </el-header>

      <el-main>
      <div id="app">
    
      <el-tabs type="border-card" v-model="activeName ">
        
        <el-tab-pane v-for="cat in categories" :key="cat.categories_name" 
          :label="cat.categories_name">
          <h3>{{ cat.categories_name }}</h3>
        <TableData>
          <thead>
            <tr>
                <th>Aktivitet</th>
                <th v-for="feat in cat.features" :key="feat.features_id">
                    {{feat.features_name}}
                </th>
                <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="act in activities" :key="act.activities_id">
              <td>{{act.activities_name}} </td>

                <!-- Making only the features that are active is visible -->
              <td v-for="feat in cat.features" :key="feat.features_id">
                <div v-for="feature in act.features" :key="feature.features_id" v-show="feature.features_id === feat.features_id">
                  <div class="activity_values"> {{feature.activities_feature.activities_features_values}}</div>
                </div>
              </td>
              <td> 
                <el-button type="text" size="small">Edit</el-button>
              </td>
            </tr>
          </tbody>
        </TableData>
      </el-tab-pane>
    </el-tabs>
    </div>
  </el-main>
 </el-container>
  </div>
</template>

<script>
import CategoryDataService from "@/services/CategoryDataService.js";
import ActivtyDataService from "@/services/ActivityDataService.js";
//import FeatureDataService from "@/services/FeatureDataService.js";
import TableData from "@/components/Table.vue";
import AdminNav from "@/components/AdminNav";

  export default {
    name: "EntireList",

    components: {
        TableData,
        AdminNav
      },

    data(){
      return { 
        features: [],
        features_name: "",
        msg: "Aktiviteter med egenskaper",
        activities_feature: "",
        activities_features_values:"",

        activities: [],
        activities_name: "",

        categories: [],
        categories_name: "",

        
      };
    },
    computed:{
     
    },
    methods:{
    
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
      retrieveActivities() {
        ActivtyDataService.getAllFeatures()
            .then(response => {
            this.activities = response.data;
            console.log(response.data);
          })
          .catch(e => {
          console.log(e);
        });
      },
      refreshList() {
        this.retrieveCategories();
        this. retrieveActivities();
      
      },
    },
    mounted() {
      this.retrieveCategories();
      this. retrieveActivities();
    }   
};
</script>

<style scoped>
@import url("//unpkg.com/element-ui@2.15.1/lib/theme-chalk/index.css");

</style>
