import { Route, Routes } from "react-router-dom";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";
import SideBar from "./components/SideBar/SideBar";
import ButtonTheme from "./components/ButtonTheme/ButtonTheme";
import Home from "./pages/Home/Home";
import About from './pages/About/About'
import bgd from "./assets/bgd.png";
import Experiencie from "./pages/Experience/Experiencie";
import Contact from "./pages/Contact/Contact";

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
          <SideBar contextTheme={contextTheme} />
        </Box>
        <Box
          component="main"
          sx={{
            ...obj,
            width: "75vw",
          }}
        >
          <ButtonTheme />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/experience' element={<Experiencie />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='*' element={<>Not Found</>} />
          </Routes>
        </Box>
      </>
    </ThemeProvider>
  );
}

export default App;
