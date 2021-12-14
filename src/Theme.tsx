import { useState, ReactNode } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

// material-ui theme
const lightTheme = createTheme({
  typography: {
    fontFamily: ["IRANSans", "IRANSansFa", "sans-serif"].join(","),
  },
  direction: "rtl",
  palette: {
    mode: "light",
  },
});

const darkTheme = createTheme({
  typography: {
    fontFamily: ["IRANSans", "IRANSansFa", "sans-serif"].join(","),
  },
  direction: "rtl",
  palette: {
    mode: "dark",
  },
});

type Props = {
  children: ReactNode;
};

function Theme(props: Props) {
  const [theme, setTheme] = useState(darkTheme);
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={() => setTheme(lightTheme)}>light</Button>
        <Button onClick={() => setTheme(darkTheme)}>dark</Button>
      </Box>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </Box>
  );
}

export default Theme;
