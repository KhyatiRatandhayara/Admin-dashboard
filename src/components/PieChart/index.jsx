import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts";
import { styled } from "@mui/material/styles";

const data1 = [
  { label: "Group A", value: 400 },
  { label: "Group B", value: 300 },
  { label: "Group C", value: 300 },
  { label: "Group D", value: 200 },
  { label: "Group E", value: 278 },
  { label: "Group F", value: 189 },
];

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 20,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

const CustomPieChart = () => {
  const totalValue = data1.reduce((acc, cur) => acc + cur.value, 0);
  return (
    <PieChart
      series={[
        {
          outerRadius: 80,
          data: data1,
          innerRadius: 40,
        },
      ]}
      height={250}
      slotProps={{
        legend: {
          direction: "row",
          position: { vertical: "bottom", horizontal: "left" },
          padding: 0,
        },
        pie: {
          elements: {
            arc: {
              content: (
                <g>
                  {data1.map((item, index) => {
                    const angle = (item.value / totalValue) * (Math.PI * 2); // Calculate angle
                    const midAngle = angle / 2; // Calculate mid angle
                    const textX = Math.cos(midAngle) * 60; // X coordinate for text
                    const textY = Math.sin(midAngle) * 60; // Y coordinate for text
                    return (
                      <React.Fragment key={index}>
                        <text
                          x={textX}
                          y={textY}
                          fill="black"
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fontSize="10px"
                        >
                          {`${(item.value / totalValue) * 100}%`}
                        </text>
                        <line
                          x1={Math.cos(midAngle) * 40}
                          y1={Math.sin(midAngle) * 40}
                          x2={Math.cos(midAngle) * 70}
                          y2={Math.sin(midAngle) * 70}
                          stroke="red"
                        />
                      </React.Fragment>
                    );
                  })}
                </g>
              ),
            },
          },
        },
      }}
    >
      <PieCenterLabel>100%</PieCenterLabel>
    </PieChart>
  );
};

export default CustomPieChart;
