<template>
  <div>
    <h1> {{ table_of_results }} </h1>
    <canvas id="activity-chart"></canvas>
    <ResultsList :list_of_results="list_of_results" />
  </div>
</template>

<script>
import Chart from "chart.js";
import activityChartData from "../activity-data.js";
import ResultsList from "@/components/ResultsList.vue"

export default {
  name: "Restults",
  components: {
    ResultsList
    },
  data() {
    return {
      activityChartData: activityChartData,
      list_of_results: "Liste over resultatene",
      table_of_results: "Tabell over resultatene",
    };
  },
  mounted() {
    const ctx = document.getElementById("activity-chart");
    new Chart(ctx, this.activityChartData);
  },
};
</script>

<style scoped>
#activity-chart {
  max-width: 60%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
}
</style>

