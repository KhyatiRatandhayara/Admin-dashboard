import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";

import AverageBox from "../AverageBox";
import averageData from "../../data/averageData.json";

const AverageDetails = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      gridAutoRows="140px"
      gap="20px"
    >
      {averageData.map((item) => (
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <AverageBox
            title={item.name}
            titleNumber={item.number}
            icon={item.icon}
          />
        </Box>
      ))}
    </Box>
  );
};

export default AverageDetails;
