import Box from "@mui/material/Box";
import ServiceCard from "components/ServiceCard/ServiceCard";
import addServiceIcon from "./add-service.png";
import exchangeIcon from "./exchange.png";

type Props = {};

const ServicesCard = (props: Props) => {
  const {} = props;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      <ServiceCard img={exchangeIcon} title={"تبادل"} />
      <ServiceCard img={addServiceIcon} title={"تبلیغ"} />
    </Box>
  );
};
export default ServicesCard;
