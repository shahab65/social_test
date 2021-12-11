import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

type StyleProps = {};

const Wrapper = styled.div<StyleProps>`
  background-color: #4d8dff;
  border-radius: 20px;
  padding: 20px;
`;

type Props = {};

const WalletCard = (props: Props) => {
  const {} = props;
  return (
    <Wrapper>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ fontSize: 12, ml: 0.5 }}>
            موجودی کیف پول:
          </Typography>
          <Typography
            sx={{
              fontSize: 20,
              fontWeight: "bold",
              fontFamily: "IRANSansFa",
              ml: 0.5,
            }}
          >
            7،000،000
          </Typography>
          <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
            ریال
          </Typography>
        </Box>
        <IconButton>
          <div>hi</div>
        </IconButton>
      </Box>
      <Box
        sx={{
          background: "linear-gradient(#2464d7, #4d8dff)",
          padding: "10px 16px",
          borderRadius: 18,
        }}
      >
        <Typography sx={{ fontSize: 12, fontFamily: "IRANSansFa" }}>
          مبلغ 300000 ریال از موجودی شما برای سفارش سرویس رزرو شد
        </Typography>
      </Box>
    </Wrapper>
  );
};
export default WalletCard;
