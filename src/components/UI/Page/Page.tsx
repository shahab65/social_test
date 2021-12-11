import Box from "@mui/material/Box";
import { ArrowRight } from "../../icons";

type Props = {
  children: React.ReactNode;
};
const Page = (props: Props) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", height: "100%" }}>
      <Box
        sx={{
          maxWidth: 600,
          width: 600,
          padding: "30px",
          direction: "rtl",
          minHeight: "100%",
          position: "relative",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-start", mb: 2 }}>
          <ArrowRight />
        </Box>

        {props.children}
      </Box>
    </Box>
  );
};
export default Page;
