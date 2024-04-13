import { Grid, useTheme } from "@mui/material";
import { tokens } from "../../theme";

import AverageBox from "../AverageBox";
import averageData from "../../data/averageData.json";

const AverageDetails = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Grid
      container
      spacing={2}
      gridAutoRows="140px"
      gridTemplateColumns="repeat(12, 1fr)"
    >
      {averageData.map((item) => (
        <Grid
          item
          md={3}
          sm={6}
          xs={12}
          display="flex"
          backgroundColor={colors.primary[400]}
          alignItems="center"
          justifyContent="center"
          key={item.name}
        >
          <AverageBox
        
            title={item.name}
            titleNumber={item.number}
            icon={item.icon}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default AverageDetails;
