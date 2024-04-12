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
      color="default"
      icon={<img src={iconsImages.darkModeIcon} />}
      checkedIcon={<img src={iconsImages.lightModeIcon} />}
      inputProps={{ "aria-label": "toggle theme" }}
    />
  );
};

export default ThemeToggle;
