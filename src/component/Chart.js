import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";


const Chart = () => {
  const barChartData = {
    labels: ["Jully", "August", "September"],
    datasets: [
      {
        data: [500, 600, 500],
        label: "Like",
        borderColor: "#3333ff",
        backgroundColor: "rgba(89,219,78)",
        fill: true
      },
      {
        data: [1000, 900, 700],
        label: "View",
        borderColor: "#ff3333",
        backgroundColor: "grey",
        fill: true
      }
    ]
  };

  const barChart = (
    <Bar
      type="bar"
      width={130}
      height={50}
      options={{
        title: {
          display: true,
          text: "COVID-19 Cases of Last 3 Months",
          fontSize: 15
        },
        legend: {
          display: true, //Is the legend shown?
          position: "top" //Position of the legend.
        }
      }}
      data={barChartData}
    />
  );
  return barChart;
};

export default Chart;