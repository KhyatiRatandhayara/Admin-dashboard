import { useTheme } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import { ColorModeContext } from "../../theme";
import { useContext } from "react";
import { iconsImages } from "../../utils/constants";

const ThemeToggle = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <Switch
      checked={theme.palette.mode === "light"}
      onChange={colorMode.toggleColorMode}
      icon={<img src={iconsImages.darkModeIcon}  alt="Dark Mode Icon" style={{ width: "100%", height: "100%" }}/>}
      checkedIcon={<img src={iconsImages.lightModeIcon}  alt="Light Mode Icon" style={{ width: "100%", height: "100%" }}/>}
      inputProps={{ "aria-label": "toggle theme" }}
      sx={{ width: "60%", height: "inherit", padding:"110px" }}
    />
  );
};

export default ThemeToggle;
