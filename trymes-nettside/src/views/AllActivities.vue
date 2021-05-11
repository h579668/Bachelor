<template>
  <div class="activities">
    <ResultsList :list_of_results="list_of_results" />>
  </div>
</template>

<script>
// @ is an alias to /src
import ResultsList from "@/components/ResultsList.vue";

export default {
  name: "AllActivities",
  
  components: {
    ResultsList,
  },
  data() {
    return {
     list_of_results: "Liste over resultatene",
    }
  },
};
</script>
