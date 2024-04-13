import { useEffect, useState } from "react";
import { Sidebar, Menu } from "react-pro-sidebar";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import { tokens } from "../../theme";
import menuItems from "../../data/sideBarData.json";
import CustomMenuItem from "../CustomMenuItem";
import Header from "../../components/Header";
import ThemeToggle from "../../components/Theme/ThemeToggle";

const CustomSidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  useEffect(() => {
    isMobile ? setIsCollapsed(true) : setIsCollapsed(false);
  }, [isMobile]);

  return (
    <Box sx={{ backgroundColor: colors.primary[500] }}>
      <Sidebar collapsed={isCollapsed} style={{ height: "auto" }}>
        <Menu iconShape="square" >
          <Header isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
          <Box
            paddingLeft={isCollapsed ? undefined : "10%"}
            paddingRight={isCollapsed ? "10%" : undefined}
            backgroundColor={colors.primary[500]}
          >
            {menuItems.map((menuItem) => (
              <CustomMenuItem
                key={menuItem.name}
                title={menuItem.name}
                icon={menuItem.icon}
                selected={selected}
                setSelected={setSelected}
              />
            ))}
            <ThemeToggle />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default CustomSidebar;
