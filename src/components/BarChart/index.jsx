import { BarChart } from "@mui/x-charts";
import revenueDataJson from "../../data/revenueData.json";

const CustomBarChart = () => {
  return (
    <BarChart
      width={500}
      height={290}
      series={[{ data: revenueDataJson.revenueData, id: "revenueId" }]}
      xAxis={[{ data: revenueDataJson.months, scaleType: "band"}]}
      grid={{ horizontal: true, vertical: true }}
    />
  );
};

export default CustomBarChart;
