<template>
  <div class="createNewActivity">
    <h1>{{ msg }}</h1>
    <form class="newActivity-container">
        <p>
            <label for="name">Navn på aktivitet: </label><input type="text" id="name">
        </p>
        <h2>Kategorier</h2>
        <ul>
            <li v-for="(item, index) in categories" :key="index">
                {{ item.categories_name }}
                
            </li>
            <li>
              ...
            </li>
        </ul>
    </form>
  </div>
</template>

<script>
import CategoryDataService from "@/services/CategoryDataService.js";
export default {
    
  name: "createNewActivity",
  props: {
    msg: String,
  },

  data() {
        return { 
        categories: [],
        categories_name: "",
        };
    },

    methods: {
      retrievcategory() {
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
        this.retrievcategory();
      
      },
    },
    mounted() {
      this.retrievcategory();
    } 
};
</script>

<style scoped>


</style>