import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Providers from "./providers";

const theme = createTheme({
  palette: {
    primary: {
      main: "#C42E2E",
      light: "rgba(195, 46, 46, 0.5)",
    },
    secondary: {
      main: "#fff",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Providers>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
