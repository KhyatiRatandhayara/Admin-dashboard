import { Box, Grid, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import ImageIcon from "../Theme/ImageIcon";


const AverageBox = ({ title, titleNumber, icon }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <ImageIcon iconUrl={icon} altText={title} />
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h4" sx={{ color: colors.grey[100] }}>
            {title}
          </Typography>
          <Typography variant="h3" sx={{ color: colors.grey[100] }}>
            {titleNumber}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AverageBox;
