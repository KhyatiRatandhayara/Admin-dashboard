import React from "react";
import PieChart from "../PieChart";
import { Grid, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";

const SalesCategory = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Grid container p={"10px"}>
      <Typography variant="h4" sx={{ color: colors.grey[100] }}>
        Sales by category
      </Typography>

      <PieChart />
    </Grid>
  );
};

export default SalesCategory;
