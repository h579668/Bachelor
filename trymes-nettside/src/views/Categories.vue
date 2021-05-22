<template>
  <div class="createNewActivity">
    <h1>{{ msg }}</h1>
   <!-- <form class="newActivity-container">
        <p>
            <label for="name">Navn på aktivitet: </label><input type="text" id="name">
        </p>
        <h2>Kategorier</h2>
        <table>
            <thead>
            <tr>
              <th> Egenskap</th> <v-for="(cat, index) in categories" :key="index">
              <th> Kategorier </th>
            </tr>
             </thead>
            <tbody>
                <tr v-for="(cat, index) in categories" :key="index">
                    <td  > {{ cat.features.features_id }} </td>
                    <td> {{ cat.categories_name }} </td>
                </tr>
            </tbody>
        </table>
    
    </form>-->
    <!--<div v-for="(cat, index) in categories" :key="index"> -->
    <!--  {{ cat.categories_name }}-->
    <section>
      <div v-for="cat in categories" :key="cat.categories_id">
        <br />
        <h2>{{ cat.categories_name }} </h2>
        <div v-for="feat in cat.features" :key="feat.features_id">
        {{ feat.features_name }}
        </div>
      </div>
      
    </section>
      <div id="app">
        
 <!-- <section class="mb-1" v-for="locale in careers.locales">
  <h2>{{locale.region}}</h2>
    <template v-for="role in locale.roles">
      <p>Role: {{role.name}} - Term: {{role.term}}</p>
    </template>
  </section>-->
</div>
  
  </div>
</template> 

<script>
import CategoryDataService from "@/services/CategoryDataService.js";
//import ActivityFeatureDataService from "@/services/ActivityFeatureDataService.js";
//import FeatureDataService from "@/services/FeatureDataService.js";

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
          //features:[],
          features_name: "",
        };
    },

    methods: {
      retrieveCategory() {
        CategoryDataService.getAll()
            .then(response => {
            this.categories = response.data;
            console.log(response.data);
          })
          .catch(e => {
          console.log(e);
        });
      },

      refreshList() {
        this.retrieveCategory();
     
      },
    },
    mounted() {
      this.retrieveCategory();
    
    } 
};
</script>

<style scoped>
table{
  width:100%;
}

</style>-->