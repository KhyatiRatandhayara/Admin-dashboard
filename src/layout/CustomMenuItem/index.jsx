import { Typography, useTheme } from "@mui/material";
import { MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import ImageIcon from "../../components/Theme/ImageIcon";
import styles from "./CustomMenuItem.module.css";
import ThemeToggle from "../../components/Theme/ThemeToggle";

const CustomMenuItem = ({ title, icon, selected, setSelected }) => {
  const theme = useTheme();

  return (
    <MenuItem active={selected === title} onClick={() => setSelected(title)}>
      <Link to={`/${title.toLowerCase()}`} className={styles.link}>
        <ImageIcon iconUrl={icon} altText={title} />
        <Typography> {title}</Typography>
      </Link>
      {title === 'Theme' && <ThemeToggle />}
    </MenuItem>
  );
};

export default CustomMenuItem;
