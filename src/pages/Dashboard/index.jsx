import { Box, Divider, useTheme } from "@mui/material";
import UserProfile from "../../components/UserProfile";
import FilterSection from "../../components/FilterSection";
import AverageDetails from "../../components/AverageDetails";
import TotalRevenueGraph from "../../components/TotalRevenueGraph";
import { tokens } from "../../theme";
import PopularSales from "../../components/PopularSales";
import SalesCategory from "../../components/SalesCategory";
import DataGrid1 from "../../components/DataGrid";
import StockWeather from "../../components/StockWeather";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <UserProfile />
      <Divider flexItem />
      <FilterSection />
      <AverageDetails />
      <Box marginTop={"30px"}></Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="300px"
        gap="20px"
      >
        <Box
          gridColumn="span 6"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <TotalRevenueGraph />
        </Box>
        <Box
          gridColumn="span 6"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <PopularSales />
        </Box>
      </Box>

      <Box marginTop={"30px"}></Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="300px"
        gap="20px"
      >
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <SalesCategory />
        </Box>
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
        <StockWeather />
        </Box>
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        ></Box>
      </Box>
    </>
  );
};

export default Dashboard;
