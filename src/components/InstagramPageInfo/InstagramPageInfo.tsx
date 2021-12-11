import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 32px;
  padding: 0 16px;
`;

const InfoItem = styled.div`
  flex-grow: 1;
  &.center {
    border-right: 1px solid #78919191;
    border-left: 1px solid #78919191;
  }
`;
type Props = {};

const SubmitButton = (props: Props) => {
  const {} = props;
  return (
    <Wrapper>
      <InfoItem>
        <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>128</Typography>
        <Typography sx={{ fontSize: 12 }}>پست</Typography>
      </InfoItem>
      <InfoItem className={"center"}>
        <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>1K</Typography>
        <Typography sx={{ fontSize: 12 }}>دنبال کننده</Typography>
      </InfoItem>
      <InfoItem>
        <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>128</Typography>
        <Typography sx={{ fontSize: 12 }}>دنبال شونده</Typography>
      </InfoItem>
    </Wrapper>
  );
};
export default SubmitButton;
