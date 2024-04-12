import { Box } from "@mui/material";

const CustomBox = ({ children }) => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      gridAutoRows="300px"
      gap={2}
    >
      {children}
    </Box>
  );
};

export default CustomBox;
