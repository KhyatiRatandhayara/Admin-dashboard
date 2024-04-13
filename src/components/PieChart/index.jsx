import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts";
import { styled } from "@mui/material/styles";
import pieChartData from "../../data/pieChartData.json";

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 20,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText  x={(left + width / 2).toString()} y={(top + height / 2).toString()}>
      {children}
    </StyledText>
  );
}

const TOTAL = pieChartData.data
  .map((item) => item.value)
  .reduce((a, b) => a + b, 0);

const getArcLabel = (params) => {
  const percent = params.value / TOTAL;
  return `${(percent * 100).toFixed(0)}%`;
};

const CustomPieChart = () => {
  const { data, totalPercentage } = pieChartData;
  return (
    <PieChart
      series={[
        {
          outerRadius: 80,
          data: data,
          innerRadius: 40,
          arcLabel: getArcLabel,
        },
      ]}
      height={250}
      slotProps={{
        legend: {
          direction: "row",
          position: { vertical: "bottom", horizontal: "left" },
          padding: -20,
        },
      }}
    >
      <PieCenterLabel>{`${totalPercentage}%`}</PieCenterLabel>
    </PieChart>
  );
};

export default CustomPieChart;
