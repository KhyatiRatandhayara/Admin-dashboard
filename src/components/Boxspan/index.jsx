import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Boxspan = ({ spanSize, children, shade, alignment }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      gridColumn={`span ${spanSize}`}
      backgroundColor={colors.primary[shade]}
      display="flex"
      alignItems={alignment}
      justifyContent={alignment}
    >
      {children}
    </Box>
  );
};

export default Boxspan;
