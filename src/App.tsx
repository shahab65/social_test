import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import dayjs from "dayjs";
import "dayjs/locale/fa";
import jalaliday from "jalaliday";
import { QueryClient, QueryClientProvider } from "react-query";
import RouteList from "./routes";
import RTL from "./RTL";
// material-ui theme
const theme = createTheme({
  typography: {
    fontFamily: ["IRANSans", "IRANSansFa", "sans-serif"].join(","),
  },
  direction: "rtl",
});

// farsi support for dayjs
dayjs.locale("fa");
dayjs.extend(jalaliday);

// Create a query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RTL>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouteList />
        </ThemeProvider>
      </RTL>
    </QueryClientProvider>
  );
}

export default App;
