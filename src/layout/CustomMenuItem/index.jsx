import { Typography, useTheme } from "@mui/material";
import { MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import ImageIcon from "../../components/Theme/ImageIcon";
import { tokens } from "../../theme";
import styles from "./CustomMenuItem.module.css";

const CustomMenuItem = ({ title, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const path = title === 'Dashboard' ?  `/` : `/${title.toLowerCase()}`;
  return (
    <MenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      style={{
        color: colors.grey[100],
      }}
    >
      <Link to={path} className={styles.link}>
        <ImageIcon iconUrl={icon} altText={title} />
        <Typography color={colors.grey[100]}> {title}</Typography>
      </Link>
    </MenuItem>
  );
};

export default CustomMenuItem;
