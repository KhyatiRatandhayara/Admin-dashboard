import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext } from "./theme";
import Sidebar from "./layout/Sidebar";
import useMode from "./utils/hooks/useMode";
import Router from "./Routers/Router";
import Dashboard from "./pages/Dashboard";


function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Dashboard />
           
          <Router />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
