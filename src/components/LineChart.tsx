import React from "react"
import { Line } from "react-chartjs-2"

const data = {
     labels: ["1", "2", "3", "4", "5", "6","7"],
     datasets: [
          {
               label: "# of Votes",
               data: [12, 19, 3, 5, 2, 3,5],
               fill: false,
               backgroundColor: "rgb(255, 99, 132)",
               borderColor: "rgba(255, 99, 132, 0.2)",
          },
     ],
}

const options = {
     scales: {
          yAxes: [
               {
                    ticks: {
                         beginAtZero: true,
                    },
               },
          ],
     },
}

const LineChart = () => (
     <>
         
          <Line data={data} options={options} />
     </>
)

export default LineChart
