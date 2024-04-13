import { MenuItem } from "react-pro-sidebar";
import { IconButton, Typography, Box } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";

const Header = ({ isCollapsed, setIsCollapsed }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      onClick={() => setIsCollapsed(!isCollapsed)}
      icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
      style={{
        backgroundColor: colors.primary[500],
      }}
    >
      {!isCollapsed && (
        <Box display="flex" alignItems="center">
          <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
            <MenuOutlinedIcon />
          </IconButton>
          <Typography variant="h3" color={colors.grey[100]} >
            LOOP
          </Typography>
        </Box>
      )}
    </MenuItem>
  );
};

export default Header;
