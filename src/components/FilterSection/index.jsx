import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import CustomDatePicker from "../CustomDatePicker";
import CustomDropdown from "../CustomDropdown";
import { tokens } from "../../theme";
import Boxspan from "../Boxspan";

const FilterSection = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
      <Boxspan spanSize={6} shade={0} alignment={"left"}>
        <Typography variant="h3" color={colors.grey[100]}>
          Dashboard
        </Typography>
      </Boxspan>
      <Box gridColumn="span 6">
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
          <Boxspan spanSize={3} shade={0} alignment={"center"}></Boxspan>
          <Boxspan spanSize={3} shade={0} alignment={"center"}>
            <CustomDropdown />
          </Boxspan>
          <Boxspan spanSize={3} shade={0} alignment={"center"}>
            <CustomDatePicker type="from" />
          </Boxspan>
          <Boxspan spanSize={3} shade={0} alignment={"center"}>
            {" "}
            <CustomDatePicker type="to" />
          </Boxspan>
        </Box>
      </Box>
    </Box>
  );
};

export default FilterSection;
