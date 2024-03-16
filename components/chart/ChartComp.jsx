"use client"
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement);

const LineChart = () => {
    const data = {
        labels: ['Monday', 'Thuesday', 'Wednesday', 'Thursday', 'Friday'],
        datasets: [
            {
                label: '',
                data: [10, 28, 59, 17],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }
        ]
    };

    const options = {
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false
            }
        },
        scales: {
            x: {
                display: true,
                ticks: {
                    color: 'black'
                }
            },
            y: {
                display: true,
                position: 'left',
                min: 0, // Set the minimum value of the y-axis scale
                max: 100, // Set the maximum value of the y-axis scale
                ticks: {
                    color: 'black',
                    reverse: true,
                }
            }
        }
    };

    return (
        <div>
            <Line data={data} options={options} />
        </div>
    );
};

export default LineChart;