import { Box, Divider, useTheme } from "@mui/material";
import UserProfile from "../../components/UserProfile";
import FilterSection from "../../components/FilterSection";
import AverageDetails from "../../components/AverageDetails";
import TotalRevenueGraph from "../../components/TotalRevenueGraph";
import PopularSales from "../../components/PopularSales";
import SalesCategory from "../../components/SalesCategory";
import StockWeather from "../../components/StockWeather";
import CustomBox from "../../components/CustomBox";
import Boxspan from "../../components/Boxspan";

const Dashboard = () => {
  return (
    <>
      <UserProfile />
      <Divider flexItem />

      <FilterSection />

      <AverageDetails />
      <Box marginTop={"30px"}></Box>
      <CustomBox>
        <Boxspan spanSize={6} shade={400} alignment={"center"}>
          <TotalRevenueGraph />
        </Boxspan>
        <Boxspan spanSize={6} shade={400} alignment={"center"}>
          <PopularSales />
        </Boxspan>
      </CustomBox>

      <Box marginTop={"30px"}></Box>

      <CustomBox >
        <Boxspan spanSize={4} shade={400} alignment={"center"}>
          <SalesCategory />
        </Boxspan>
        <Boxspan spanSize={4} shade={400} alignment={"center"}>
          <StockWeather />
        </Boxspan>
        <Boxspan spanSize={4} shade={400} alignment={"center"}></Boxspan>
      </CustomBox>
    </>
  );
};

export default Dashboard;
