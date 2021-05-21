<template>
<!-- role="main" means that it is the main content on the page-->
     <div role="main">
        <h1> {{msg}} </h1>
   
        <!-- Tab links -->
        <div class="tab">
          <th v-for="(item, index) in categories" :key="index">
            <button class="tablinks" @click="openCity(event, item.categories_name)">{{ item.categories_name }}</button>
          </th>
        </div>
      
      
        <!-- Tab content -->
        <div id="Fysiske egenskaper" class="tabcontent">
          <h3>Fysiske egenskaper</h3>
            <table>
              <thead>
                <!--<tr>
                    <th v-for="(item, index) in features" :key="index">{{ item.features_name }}</th>
                </tr>-->
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
                </tr>-->
                <tr>
                  <th>Aktivitet</th>
                  <th>Balanse</th>
                  <th>Rytme</th>
                  <th>Øye-fot</th>
                  <th>Øye-hånd</th>
                  <th>Romorientering</th>
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
                </tr>-->
                <tr>
                  <th>Aktivitet</th>
                  <th>Estetikk/Kunst (Subjektivt)</th>
                  <th>Kamp (vinner-taper)</th>
                  <th>MSK (Meter, Sekund, Kilo) (Rangering)</th>
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
        </table>-->
        
    </div>
</template>

<script>
import ActivityDataService from "@/services/ActivityDataService.js";
import CategoryDataService from "@/services/CategoryDataService.js";
import FeatureDataService from "@/services/FeatureDataService.js";

  export default {
    name: "ActivityList",
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
      openCity(evt, tabName) {
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


</style>