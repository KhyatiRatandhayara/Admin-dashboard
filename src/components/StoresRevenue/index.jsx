import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";

const StoresRevenue = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Grid container p={"10px"}>
      <Typography variant="h4" sx={{ color: colors.grey[100] }}>
        Stores Revenue
      </Typography>

      <DataGrid1 />
    </Grid>
  );
};

export default StoresRevenue;
