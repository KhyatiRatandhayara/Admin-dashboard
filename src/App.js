import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext } from "./theme";
import useMode from "./utils/hooks/useMode";
import Router from "./Routers/Router";
import CustomSidebar from "./layout/Sidebar";


function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
        <CustomSidebar />
          <main className="content">
          <Router />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
