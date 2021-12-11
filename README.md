### material ui imports

```ts
import Box from "@mui/material/Box";
<Box sx={{ display: "flex", justifyContent: "center", height: "100%" }}></Box>;

import Avatar from "@mui/material/Avatar";
import avatar from "assets/images/avatar.png";
<Avatar alt={"text"} src={avatar} style={{ width: 37, height: 37 }} />;

import Button from "@mui/material/Button";
<Button
  variant="outlined"
  onClick={() => {}}
  sx={{
    border: "1px solid #2464d7",
    borderRadius: 8,
    color: "#2464d7",
    fontWeight: "bold",
  }}
>
  مشاهده صفحات
</Button>;
```

```ts
import Typography from "@mui/material/Typography";

    <Typography sx={{ fontWeight: "bold" }}>Bold</Typography>
      <Typography sx={{ fontWeight: 500 }}>Medium</Typography>
      <Typography sx={{ fontWeight: 300 }}>Light</Typography>
      <Typography sx={{ fontWeight: 200 }}>Ultra Light</Typography>
      <Typography sx={{ fontWeight: "normal" }}>Regular</Typography>
      <Typography  sx={{ fontSize: 14, color: "#ffffff", fontFamily: "IRANSansFa" }}> 3  </Typography>
```

page

```ts
import Page from "../components/UI/Page/Page";

const ConfirmInstagramPage = () => {
  return <Page>hi</Page>;
};

export default ConfirmInstagramPage;
```

component

```ts
import Box from "@mui/material/Box";

type Props = {};

const PagesPreview = (props: Props) => {
  const {} = props;
  return <Box>hi</Box>;
};
export default PagesPreview;
```

import InstagramPageInfo from "components/InstagramPageInfo/InstagramPageInfo";

emotion dynamic style

```ts
import { css } from "@emotion/react";

const dynamicStyle = (props: { hasBorder?: boolean }) => {
  if (props.hasBorder)
    return css`
      border-left: 1px solid blue;
      border-right: 1px solid red;
    `;
};

const InfoItem = styled.div<{ hasBorder?: boolean }>`
  flex-grow: 1;
  ${dynamicStyle};
`;

<InfoItem hasBorder>
```

### icons

```ts
import { ArrowLeft } from "../../icons";
```
