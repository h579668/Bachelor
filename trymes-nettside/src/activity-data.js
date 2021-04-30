export const activityChartData = {
    type: "bar",
    data: {
      labels: ["Handball", "Fotball", "Sjakk", "Orientering", "Hekkeløp", "Hesteriding", "Skyting på bane", "Paintball", "Curling", "Dans"],
      datasets: [
        {
          label: "Aktiviteter",
          data: [95, 95, 90, 89, 86, 78, 74, 74, 74,73],
          backgroundColor: "rgba(115,158,132,.9)",
          borderColor: "#4d996a",
          borderWidth: 3
        },
      ]
    },
    
    options: {
      responsive: true,
      lineTension: 1,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              padding: 25
            }
          }
        ]
      }
    }
  };
  
  export default activityChartData;