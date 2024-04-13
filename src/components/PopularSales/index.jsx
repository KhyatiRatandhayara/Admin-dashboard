import { Grid, Typography } from "@mui/material";
import SalesTable from "../SalesTable";

const PopularSales = () => {
  return (
    <Grid container display={"flex"}>
      <Typography variant="h4">Top Popular Sale Items</Typography>
      <SalesTable />
    </Grid>
  );
};

export default PopularSales;
