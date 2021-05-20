<script src="//unpkg.com/vue/dist/vue.js"></script>
<script src="//unpkg.com/element-ui@2.15.1/lib/index.js"></script>
<template>
<div id="app">
<template>
  <el-tabs type="card" @tab-click="handleClick">
    <el-tab-pane label="User">User</el-tab-pane>
    <el-tab-pane label="Config">Config</el-tab-pane>
    <el-tab-pane label="Role">Role</el-tab-pane>
    <el-tab-pane label="Task">Task</el-tab-pane>
  </el-tabs>
  </template>
</div>
</template>


<script>
export default {
  name: "Categories",
  
  data() {
      return {
        activeName: 'first',
        list_of_results: "Liste over resultatene"
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    
  }
};
</script>

<style scoped>
@import url("//unpkg.com/element-ui@2.15.1/lib/theme-chalk/index.css");

</style>

<!--<template>
  <div class="createNewActivity">
    <h1>{{ msg }}</h1>
    <form class="newActivity-container">
        <p>
            <label for="name">Navn på aktivitet: </label><input type="text" id="name">
        </p>
        <h2>Kategorier</h2>
        <table>
            <thead>
            <tr>
              <th> Egenskap</th> <v-for="(cat, index) in categories" :key="index">
              <th> kategorier </th>
            </tr>
             </thead>
            <tbody>
                <tr>
                    <td v-for="(feat, index) in features" :key="index" > {{ feat.features_name }} </td>
                    <td> {{ feat.categories_name }} </td>
                </tr>
            </tbody>
        </table>
    
    </form>
  </div>
</template> 

<script>
//import CategoryDataService from "@/services/CategoryDataService.js";
import FeatureDataService from "@/services/FeatureDataService.js";

export default {
    
  name: "Categories",
  props: {
    msg: String,
  },

  data() {
        return { 
          categories: [],
          categories_name: "",
          categories_id : "",
          features:[],
          features_name: "",
        };
    },

    methods: {
      /*retrieveCategory() {
        CategoryDataService.getAll()
            .then(response => {
            this.categories = response.data;
            console.log(response.data);
          })
          .catch(e => {
          console.log(e);
        });
      },*/
      retrieveFeature() {
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
        //this.retrieveCategory();
        this.retrieveFeature();
      },
    },
    mounted() {
      //this.retrieveCategory();
      this.retrieveFeature();
    } 
};
</script>

<style scoped>
table{
  width:100%;
}

</style>-->