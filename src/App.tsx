import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import dayjs from "dayjs";
import "dayjs/locale/fa";
import jalaliday from "jalaliday";
import { QueryClient, QueryClientProvider } from "react-query";
import RouteList from "./routes";
import RTL from "./RTL";
import Theme from "./Theme";

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
        <Theme>
          <RouteList />
        </Theme>
      </RTL>
    </QueryClientProvider>
  );
}

export default App;
