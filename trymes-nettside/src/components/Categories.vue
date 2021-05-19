<template>
  <div class="createNewActivity">
    <h1>{{ msg }}</h1>
    <form class="newActivity-container">
        <p>
            <label for="name">Navn på aktivitet: </label><input type="text" id="name">
        </p>
        <h2></h2>
        <table>
            <thead>
            <tr>
              <th> Egenskaper</th>
            </tr>
             </thead>
            <tbody>
                <tr v-for="(feat, index) in features" :key="index">
                    <td> {{ feat.features_name }} </td>
                    <td> {{ feat.categories_id }} </td>
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
          //categories: [],
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
        this.retrieveFeature();
        //this.retrieveCategory();
      
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

</style>