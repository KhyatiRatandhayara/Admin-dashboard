import { Typography } from "@mui/material";
import BarChart from "../BarChart";

const TotalRevenueGraph = () => {
  return (
    <>
      <Typography variant="h3" fontWeight="600" align="center">
        Total Revenue
      </Typography>
      <BarChart />
    </>
  );
};

export default TotalRevenueGraph;
