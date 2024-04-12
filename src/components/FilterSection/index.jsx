import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import CustomDatePicker from "../CustomDatePicker";
import CustomDropdown from "../CustomDropdown";
import { tokens } from "../../theme";

const FilterSection = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography variant="h3" color={colors.grey[100]}>
        Dashboard
      </Typography>
      <Box display="flex" alignItems="center">
        <CustomDropdown />
        <CustomDatePicker type="from"/>
        <CustomDatePicker  type="to"/>
      </Box>
    </Box>
  );
};

export default FilterSection;
