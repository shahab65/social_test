import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddConnectionPathForm from "./AddConnectionPathForm";
import { Plus } from "components/icons";
type Props = {};

const AddConnectionPath = (props: Props) => {
  const {} = props;
  return (
    <Accordion>
      <AccordionSummary>
        <Typography sx={{}}>
          <Plus />
          افزودن مسیر ارتباطی
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          <Box sx={{ p: 2, background: "red" }}>
            <AddConnectionPathForm />
          </Box>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};
export default AddConnectionPath;
