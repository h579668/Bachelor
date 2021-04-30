<template>
  <div>
    <canvas id="activity-chart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
import activityChartData from "../activity-data.js";

export default {
  name: "Restults",
  data() {
    return {
      activityChartData: activityChartData,
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

