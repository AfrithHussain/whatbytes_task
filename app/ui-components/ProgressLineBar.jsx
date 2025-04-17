import * as React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const ProgressLineBar = ({ value }) => {
  // Determine color based on percentage
  const getColor = (val) => {
    if (val >= 90) return "#4CAF50"; // Green for high percentages
    if (val >= 70) return "#2196F3"; // Blue
    if (val >= 50) return "#FFC107"; // Yellow
    if (val >= 30) return "#FF9800"; // Orange
    return "#F44336"; // Red for low percentages
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1, width: "100%" }}>
      <Box sx={{ width: "100%" }}>
        <LinearProgress
          variant="determinate"
          value={value}
          sx={{
            height: 10,
            borderRadius: 5,
            backgroundColor: "#e0e0e0",
            "& .MuiLinearProgress-bar": {
              borderRadius: 5,
              backgroundColor: getColor(value),
            },
          }}
        />
      </Box>
      <Typography variant="body2" sx={{ minWidth: 40, textAlign: "right" }}>
        {`${value}%`}
      </Typography>
    </Box>
  );
};

export default function SyllabusAnalysis() {
  const topics = [
    { name: "HTML Tools, Forms, History", percentage: 80 },
    { name: "Tags & References in HTML", percentage: 60 },
    { name: "Tables & References in HTML", percentage: 24 },
    { name: "Tables & CSS Basics", percentage: 96 },
  ];

  return (
    <div>
      <div>
        <div className="flex flex-col gap-10">
          {topics.map((topic, index) => (
            <div key={index}>
              <p className="mb-1  font-medium text-slate-600">{topic.name}</p>
              <ProgressLineBar value={topic.percentage} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
