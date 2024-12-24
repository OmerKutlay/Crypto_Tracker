import React, { Component } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const OPTIONS = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        scales: {
            y: {
                ticks: {
                    color: "rgb(255,255,255)",
                    font: {
                        size: 14,
                    },
                },
                grid: {
                    display: false,
                },
            },
            x: {
                ticks: {
                    color: "rgb(255,255,255)",
                    font: {
                        size: 14,
                    },
                },
                grid: {
                    display: false,
                },
            },
        },
    },
};

export default class LineChart extends Component {
    render() {
        const { data = [], labels = [], selectedCurrency = null } = this.props;

        // Eğer selectedCurrency mevcut değilse, hiçbir şey render etme
        if (!selectedCurrency) {
            return <div className="lineChart">No data available</div>;
        }

        const chartData = {
            labels: labels,
            datasets: [
                {
                    label: selectedCurrency.name || 'No Name',
                    data: data,
                    borderColor: "rgb(161,63,128)",
                },
            ],
        };

        return (
            <div className='lineChart'>
                <div className='title'>
                    <h3>{selectedCurrency.name || 'Unknown Currency'}</h3>
                    <h3>{selectedCurrency.priceUsd ? (Math.round(selectedCurrency.priceUsd * 100) / 100).toFixed(2) : 'N/A'}</h3>
                </div>
                <Line options={OPTIONS} data={chartData} />
            </div>
        );
    }
}
