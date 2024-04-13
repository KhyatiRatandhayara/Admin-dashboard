import { Grid, Typography } from "@mui/material";
import BarChart from "../BarChart";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";

const TotalRevenueGraph = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Grid container>
      <Grid item>
        <Typography variant="h4" sx={{ color: colors.grey[100] }}>
          Total Revenue
        </Typography>
      </Grid>

      <Grid item>
        <BarChart />
      </Grid>
    </Grid>
  );
};

export default TotalRevenueGraph;
