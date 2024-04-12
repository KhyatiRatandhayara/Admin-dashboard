import { useState } from "react";
import { Sidebar, Menu } from "react-pro-sidebar";
import { Box, useTheme} from "@mui/material";
import { tokens } from "../../theme";
import menuItems from "../../data/sideBarData.json";
import CustomMenuItem from "../CustomMenuItem";
import Header from "../../components/Header";

const Sidebar1 = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Sidebar collapsed={isCollapsed} backgroundColor={colors.primary[500]}>
      <Menu iconShape="square">
      <Header isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        <Box paddingLeft={isCollapsed ? undefined : "15%"}>
          {menuItems.map((menuItem) => (
            <CustomMenuItem
              key={menuItem.name}
              title={menuItem.name}
              icon={menuItem.icon}
              selected={selected}
              setSelected={setSelected}
            />
          ))}
        </Box>
      </Menu>
    </Sidebar>
  );
};

export default Sidebar1;
