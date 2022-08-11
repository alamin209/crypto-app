import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import { LoginForm } from "./component/auth/login/login-form.component";
import "./index.css";
const darkThem = createTheme({
  palette: {
    mode: "dark",
  },
});
function App() {
  return (
    <ThemeProvider theme={darkThem}>
      <LoginForm />
    </ThemeProvider>
  );
}

export default App;
