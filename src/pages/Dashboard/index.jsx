import { Grid, Box, Divider, useTheme } from "@mui/material";
import UserProfile from "../../components/UserProfile";
import FilterSection from "../../components/FilterSection";
import AverageDetails from "../../components/AverageDetails";
import TotalRevenueGraph from "../../components/TotalRevenueGraph";
import PopularSales from "../../components/PopularSales";
import SalesCategory from "../../components/SalesCategory";
import StockWeather from "../../components/StockWeather";
import StoresRevenue from "../../components/StoresRevenue";
import { tokens } from "../../theme";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <UserProfile />
      <Divider flexItem />
      <FilterSection />
      <AverageDetails />
      <Box marginTop={3}></Box>
      <Grid container spacing={2} gridTemplateColumns="repeat(12, 1fr)">
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          backgroundColor={colors.primary[400]}
          alignment="center"
        >
          <TotalRevenueGraph />
        </Grid>
        <Grid item xs={12} sm={12} md={6} backgroundColor={colors.primary[400]}>
          <PopularSales />
        </Grid>
      </Grid>

      <Box marginTop={3}></Box>
      <Grid
        container
        justifyContent="center"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="100px"
        spacing={1}
      >
        <Grid item xs={12} sm={12} md={4} backgroundColor={colors.primary[400]}>
          <SalesCategory />
        </Grid>

        <Grid item xs={12} sm={12} md={4} backgroundColor={colors.primary[400]}>
          <StockWeather />
        </Grid>
        <Grid item xs={12} sm={12} md={4} backgroundColor={colors.primary[400]}>
          <StoresRevenue />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
