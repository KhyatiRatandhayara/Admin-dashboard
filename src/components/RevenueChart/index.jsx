import { BarChart } from "@mui/x-charts";
import revenueChartData from "../../data/revenueChartData.json";

const chartSetting = {
  width: 400,
  height: 250,
};

const generateRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const RevenueChart = () => {
  const valueFormatter = (value) => `${value}`;
  return (
    <BarChart
      dataset={revenueChartData}
      yAxis={[{ scaleType: "band", dataKey: "store",  }]}
      series={[
        {
          
          dataKey: "revenueNumber",
          valueFormatter,
          color: generateRandomColor(),
        },
      ]}
      layout="horizontal"
      {...chartSetting}
      grid={{ horizontal: true, vertical: true }}
    />
  );
};

export default RevenueChart;
