import { Grid, Typography } from "@mui/material";
import SalesTable from "../SalesTable";


const PopularSales = () => {
  return (
        <Grid container>
          <Grid item>
            <Typography variant="h3" fontWeight="600">
              Top Popular Sale Items
            </Typography>
          </Grid>
          <Grid item>
            <SalesTable />
          </Grid>
        </Grid>
  );
};

export default PopularSales;
