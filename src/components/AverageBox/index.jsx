import { Grid, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import ImageIcon from "../Theme/ImageIcon";

const AverageBox = ({ title, titleNumber, icon }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Grid spacing={2} container justifyContent="center" alignItems="center">
      <Grid
        item
        xs={12}
        sm={6}
        md={6}
        justifyContent={"center"}
        display={"flex"}
      >
        <ImageIcon iconUrl={icon} altText={title} />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Typography
          variant="h4"
          sx={{ color: colors.grey[100] }}
          textAlign={"center"}
        >
          {title}
        </Typography>
        <Typography
          variant="h3"
          sx={{ color: colors.grey[100] }}
          textAlign={"center"}
        >
          {titleNumber}
        </Typography>
      </Grid>
    </Grid>
 
  );
};

export default AverageBox;
