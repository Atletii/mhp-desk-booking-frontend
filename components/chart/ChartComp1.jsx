"use client";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement);

const LineChart = ({ labels, data }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "",
        data: data,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      x: {
        display: true,
        ticks: {
          color: "black",
        },
      },
      y: {
        display: true,
        position: "left",
        min: 0,
        max: 100,
        ticks: {
          color: "black",
          reverse: true,
        },
      },
    },
  };

  return (
    <div>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChart;
