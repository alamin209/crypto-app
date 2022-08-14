import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import "./index.css";
import { Routes } from "./routes/routes";
const darkThem = createTheme({
  palette: {
    mode: "dark",
  },
});
function App() {
  return (
    <ThemeProvider theme={darkThem}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
