"use client"
import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import { ExclamationCircleIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

// Register the components we need for the chart
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

export default function ChartPage({title, data, warning, succ}) {
    // Sample data for the chart
    const [chartData] = useState({
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"], 
        datasets: [
            {
                label: "Weight Lifted (lbs)", 
                data: data, 
                fill: false, 
                borderColor: "rgb(31, 59, 77)", 
                tension: 0.1, 
            },
        ],
    });

    return (
        <div className="p-5 max-w-sm mx-auto bg-white mt-12 rounded-lg">
            <h1 className="text-xl font-bold mb-5 text-brandHeading">{title}</h1>
            <div className="w-3/4 mx-auto mb-5"> {/* Set a fixed height here */}
                <Line data={chartData} />
            </div>
            <div className="mb-5 space-y-2">
                <div className="flex gap-2 items-center">
                    <ExclamationCircleIcon className="size-6 text-red-700" />
                    <p className="text-sm font-medium text-red-700">{warning}</p>
                </div>
                <div className="flex gap-2 items-center">
                    <CheckCircleIcon className="size-5 text-green-700" />
                    <p className="text-sm font-medium text-green-700">{succ}</p>
                </div>
            </div>
            <div className="flex justify-center">
                <button className='px-4 py-2 bg-brand text-white rounded-md'>Change View</button>
            </div>
            
        </div>
    );
}
