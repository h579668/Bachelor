<template>
  <div class="createNewActivity">
    <h1>{{ msg }}</h1>
    <form class="newActivity-container">
        <p>
            <label for="name">Navn på aktivitet: </label><input type="text" id="name">
        </p>
        <h2>Kategorier</h2>
        <table>
          <tbody>
            <tr>
              <th v-for="(feat, index) in features" :key="index"> {{ feat.features_name }}</th>
            </tr>
            <tr>
              <td v-for="(feat, index) in features" :key="index"> <input type="number" :id="feat.index" /> </td>
            </tr>
          </tbody>
        </table>
       <!-- <ul>
            <li v-for="(item, index) in categories" :key="index">
                {{ item.categories_name }}
                
            </li>
            <li>
              ...
            </li>
        </ul>-->
    </form>
  </div>
</template>

<script>
import CategoryDataService from "@/services/CategoryDataService.js";
import FeatureDataService from "@/services/FeatureDataService.js";

export default {
    
  name: "CreateNewActivity",
  props: {
    msg: String,
  },

  data() {
        return { 
          categories: [],
          categories_name: "",
          features:[],
          feature_name: "",
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
        this.retrieveCategory();
      
      },
    },
    mounted() {
      this.retrieveCategory();
      this.retrieveFeature();
    } 
};
</script>

<style scoped>
table{
  width:100%;
}

</style>