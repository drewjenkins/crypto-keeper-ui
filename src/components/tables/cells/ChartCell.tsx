"use es6";

import chunk from "lodash/chunk";
import mean from "lodash/mean";
import React from "react";
import { Line } from "react-chartjs-2";
import { green, red } from "../../../colors";
import Cell from "./Cell";

type ChartCellProps = {
  values: Array<number>;
};

const ChartCell = (props: ChartCellProps) => {
  let dataPoints = chunk(props.values, 2);
  dataPoints = dataPoints.map((c) => mean(c));
  dataPoints.pop();
  dataPoints.push(props.values[props.values.length - 1]);

  const data = {
    labels: dataPoints.map((v) => ""),
    datasets: [
      {
        data: dataPoints,
        fill: false,
        backgroundColor: "transparent",
        borderWidth: 2,
        borderColor:
          dataPoints[0] > dataPoints[dataPoints.length - 1] ? red : green,
        lineTension: 0,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    tooltips: { enabled: false },
    hover: { mode: null },
    legend: { display: false },
    animation: {
      duration: 0,
    },
    scales: {
      gridLines: {
        showBorder: false,
      },
      xAxes: [
        {
          ticks: {
            display: false,
          },
          gridLines: {
            zeroLineColor: "transparent",

            color: "rgba(0, 0, 0, 0)",
            drawBorder: false,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            display: false,
          },
          gridLines: {
            zeroLineColor: "transparent",
            color: "rgba(0, 0, 0, 0)",
            drawBorder: false,
          },
        },
      ],
    },
  };

  return (
    <Cell>
      <div
        style={{
          width: 150,
          height: window.innerHeight <= 600 ? 32 : 60,
          marginTop: 13,
        }}
      >
        <Line options={options} data={data} />
      </div>
    </Cell>
  );
};

export default React.memo(ChartCell);
