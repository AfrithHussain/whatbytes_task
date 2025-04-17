import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { useMediaQuery } from "@mui/material";

export default function MarkOptimization({ percentile }) {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(max-width:900px)");

  // Original data points (scaled to 0-100 range)
  const data = [20, 30, 55, 85, 15, 50, 10, 40, 30, 80]; // Already in percentile scale

  // Adjust data based on current percentile
  const updatedData = data.map((value) => value * (percentile / 100));

  return (
    <LineChart
      xAxis={[
        {
          data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          tickInterval: [0, 25, 50, 75, 100], // Hide x-axis labels and tick
        },
      ]}
      yAxis={[
        {
          min: 0,
          max: 100,
          tickInterval: [0, 25, 50, 75, 100], // Force these specific ticks
          label: "Percentile Score",
        },
      ]}
      series={[
        {
          data: updatedData,
          showMark: ({ index }) => index % 2 === 0,
          valueFormatter: (value) => `${value.toFixed(1)}%`,
        },
      ]}
      width={isSmallScreen ? 300 : isMediumScreen ? 400 : 500}
      height={isSmallScreen ? 200 : 300}
      grid={{ horizontal: true, vertical: false }}
    />
  );
}
