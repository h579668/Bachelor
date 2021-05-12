<template>
  <div class="activities">
    <Categories :list_of_results="list_of_results" />>
  </div>
</template>

<script>
// @ is an alias to /src
import Categories from "@/components/Categories.vue";

export default {
  name: "AllActivities",
  
  components: {
   Categories,
  },
  data() {
    return {
     list_of_results: "Liste over resultatene",
    }
  },
};
</script>
