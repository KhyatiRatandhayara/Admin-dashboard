import React from "react";
import { BarChart } from "@mui/x-charts";

const revenueData = [
  2400, // January
  1398, // February
  9800, // March
  3908, // April
  4800, // May
  3800, // June
  4300, // July
  6200, // August
  7500, // September
  5600, // October
  3400, // November
  8100, // December
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const BarChart1 = () => {
  return (
    <BarChart
      width={500}
      height={290}
      series={[{ data: revenueData, id: "revenueId" }]}
      xAxis={[{ data: months, scaleType: "band" }]}
      grid={{ horizontal: true, vertical: true }}
    />
  );
};

export default BarChart1;
