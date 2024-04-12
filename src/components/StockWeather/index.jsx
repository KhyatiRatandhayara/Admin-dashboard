import { Grid, Typography } from "@mui/material";
import DataGrid1 from "../DataGrid";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";

const StockWeather = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Grid container p={"10px"}>
      <Typography variant="h4" sx={{ color: colors.grey[100] }}>
        Today's Weather - 80 C
      </Typography>
      <Typography variant="h6" sx={{ color: colors.grey[200] }} mb={"20px"}>
        People always buy this items in this weather
      </Typography>

      <DataGrid1 />
    </Grid>
  );
};

export default StockWeather;
