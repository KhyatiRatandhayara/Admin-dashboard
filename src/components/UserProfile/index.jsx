import { Typography, Box } from "@mui/material";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";

const UserProfile = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box display="flex" justifyContent="flex-end" alignItems="center">
      <Typography variant="h5" color={colors.greenAccent[500]}>
        VP Fancy Admin
      </Typography>
      <img
        alt="profile-user"
        width="50px"
        height="50px"
        src={`../../assets/icons/user.png`}
        style={{ cursor: "pointer", borderRadius: "50%" }}
      />
    </Box>
  );
};

export default UserProfile;
