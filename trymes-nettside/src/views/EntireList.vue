<template>
    <div id="app">
        <el-tabs type="border-card">
            <el-tab-pane v-for="cat in categories" :key="cat.categories_name" 
            :label="cat.categories_name">{{ cat.categories_name }}    
        <template>
           <table id="activity_featureTable">
               <thead>
                   <tr>
                        <th>Aktivitet</th>
                        <th v-for="feat in cat.features" :key="feat.features_id">
                            {{feat.features_name}}
                        </th>
                    </tr>
               </thead>
             <tbody>
                   <tr v-for="act in activities" :key="act.activities_id">
                       <td>{{act.activities_name}} </td>
                       <td v-for="f in act.features" :key="f.features_id">
                           {{f.activities_features_values}}
                       </td>
                   </tr>
               </tbody>
           </table>
        </template>
        </el-tabs>
    </div>
</template>

<script>
import CategoryDataService from "@/services/CategoryDataService.js";
import ActiivtyDataService from "@/services/ActivityDataService.js";
//import FeatureDataService from "@/services/FeatureDataService.js";

  export default {
    name: "EntireList",
    data(){
      return { 
        features: [],
        features_name: "",
        msg: "Aktiviteter med egenskaper",
        activities_features_values:"",

        activities: [],
        activities_name: "",

        categories: [],
        categories_name: "",

        
      };
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
        ActiivtyDataService.getAll()
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
.tableFixHead {
  overflow-y: auto;
  height: 500px; 
}
.tableFixHead thead th {
  position: sticky;
  top: 0;
}

#activity_featureTable {
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

#activity_featureTable td, #activity_featureTable th {
    border-bottom: 1px solid #ddd;
    padding: 8px;
}
#activity_featureTable tr:hover {
  border-bottom: 1px solid #ddd;
  }

#activity_featureTable th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #548687;
  color: white;
}


</style>
<!--
<template>
<!-- role="main" means that it is the main content on the page
     <div role="main">
        <h1> {{msg}} </h1>
   
        <!-- Tab links 
        <div class="tab">
          <th v-for="(item, index) in categories" :key="index">
            <button class="tablinks" @click="openCategory(event, item.categories_name)">{{ item.categories_name }}</button>
          </th>
        </div>
      
      
        <!-- Tab content 
        <div id="Fysiske egenskaper" class="tabcontent">
          <h3>Fysiske egenskaper</h3>
            <table>
              <thead>
                <!--<tr>
                    <th v-for="(item, index) in features" :key="index">{{ item.features_name }}</th>
                </tr>
                <tr>
                  <th>Aktivitet</th>
                  <th>Styrke</th>
                  <th>Spenst</th>
                  <th>Utholdenhet</th>
                  <th>Bevegelighet</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in activities" :key="index">
                  <td>{{ item.activities_name }}</td>
                  <td>1</td>
                  <td>3</td>
                  <td>2</td>
                  <td>1</td>
                </tr>
              </tbody>
            </table>
        </div>

        <div id="Koordinative egenskaper" class="tabcontent">
          <h3>Koordinative egenskaper</h3>
          <table>
              <thead>
                <!--<tr>
                    <th v-for="(item, index) in features" :key="index">{{ item.features_name }}</th>
                </tr>-
                <tr>
                  <th v-for="headers in features.slice(0,4)" :key="headers.features_name">{{headers.features_name}}</th>
                 <!-- <th>Balanse</th>
                  <th>Rytme</th>
                  <th>Øye-fot</th>
                  <th>Øye-hånd</th>
                  <th>Romorientering</th>-
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in activities" :key="index">
                  <td>{{ item.activities_name }}</td>
                  <td>1</td>
                  <td>3</td>
                  <td>2</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
              </tbody>
            </table> 
        </div>

        <div id="Psykologiske faktorer" class="tabcontent">
          <h3>Psykologiske faktorer</h3>
          
        </div>

        <div id="Konkurranse" class="tabcontent">
          <h3>Konkurranse</h3>
          <table>
              <thead>
                <!--<tr>
                    <th v-for="(item, index) in features" :key="index">{{ item.features_name }}</th>
                </tr>--
                <tr>
                  <th v-for="headers in features.slice(5,8)" :key="headers.features_name">{{headers.features_name}}</th>
                  <!--<th>Aktivitet</th>
                  <th>Estetikk/Kunst (Subjektivt)</th>
                  <th>Kamp (vinner-taper)</th>
                  <th>MSK (Meter, Sekund, Kilo) (Rangering)</th>--
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in activities" :key="index">
                  <td>{{ item.activities_name }}</td>
                  <td></td>
                  <td>Ja</td>
                  <td></td>
                  
                </tr>
              </tbody>
            </table> 
        </div>

        <div id="Rammer" class="tabcontent">
          <h3>Rammer</h3>
          
        </div>

        <!--<table class="tableActivity">
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
        </table>--
        
    </div>
</template>

<script>
//import ActivityDataService from "@/services/ActivityDataService.js";
import CategoryDataService from "@/services/CategoryDataService.js";
import FeatureDataService from "@/services/FeatureDataService.js";

  export default {
    name: "EntireList",
    data(){
      return { 
        activities: [],
        activities_name: "",

        categories: [],
        categories_name: "",

        features: [],
        features_name: "",
        msg: "Aktiviteter med egenskaper"
      };
    },
    methods: {
      openCategory(evt, tabName) {
        // Declare all variables
        var i, tabcontent, tablinks;

        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }

        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
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
        this.retrieveCategories();
        this.retrieveFeatures();
      
      },
    },
    mounted() {
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

/* Style the tab */
.tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}

/* Style the buttons that are used to open the tab content */
.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: #ddd;
}

/* Create an active/current tablink class */
.tab button.active {
  background-color: #ccc;
}

/* Style the tab content */
.tabcontent {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}


</style>-->