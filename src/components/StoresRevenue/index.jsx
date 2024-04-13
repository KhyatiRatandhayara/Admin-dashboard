import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";
import { tokens } from "../../theme";
import RevenueChart from "../RevenueChart";

const StoresRevenue = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <Typography variant="h4" sx={{ color: colors.grey[100] }}>
        Stores Revenue
      </Typography>
      <RevenueChart />
    </>
  );
};

export default StoresRevenue;
