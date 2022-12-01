import { useSelector } from "react-redux";
import Home from "./pages/Home/Home";
import SideBar from "./components/SideBar/SideBar";
import ButtonTheme from "./components/ButtonTheme/ButtonTheme";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import bgd from "./assets/bgd.png";

const obj = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  bgcolor: "background.default",
  color: "text.primary",
};

function App() {
  const contextTheme = useSelector((state) => state.theme.theme);

  const theme = createTheme({
    palette: {
      mode: contextTheme,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <>
        <Box margin={5}>
          <SideBar />
        </Box>
        <Box
          component="main"
          sx={{
            ...obj,
            width: "75vw",
          }}
        >
          <ButtonTheme />
          <Home />
        </Box>
      </>
    </ThemeProvider>
  );
}

export default App;
