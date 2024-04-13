import { Grid, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import CustomDatePicker from "../CustomDatePicker";
import CustomDropdown from "../CustomDropdown";
import { tokens } from "../../theme";

const FilterSection = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Grid container gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="300px">
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        color={colors.grey[100]}
        alignment="left"
      >
        <Typography variant="h3" color={colors.grey[100]}>
          Dashboard
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        color={colors.grey[100]}
        alignment="left"
      >
        <Grid
          container
          spacing={2}
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="300px"
        >
          <Grid item xs={12} sm={6} md={3} alignment="center"></Grid>
          <Grid item xs={12} sm={12} md={3} alignment="center">
            <CustomDropdown />
          </Grid>
          <Grid item xs={12} sm={6} md={3} alignment="center">
            <CustomDatePicker type="from" />
          </Grid>
          <Grid item xs={12} sm={6} md={3} alignment="center">
            <CustomDatePicker type="to" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FilterSection;
