import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

type Props = {
  deleteLink: () => void;
  link: string;
  close: () => void;
};

const DeleteConfirm = (props: Props) => {
  const { deleteLink, link, close } = props;
  const [text, setText] = useState("");
  const isValid = text === "تایید";
  return (
    <Dialog open={true}>
      <Box sx={{ p: 2 }}>
        <Typography>آیا از تصمیم خود مطمئن هستید؟</Typography>
        <Typography>
          برای حذف مسیر ارتباطی {link} لطفا تایید را بنویسید
        </Typography>
        <TextField value={text} onChange={(e) => setText(e.target.value)} />
        <Box>
          <Button disabled={!isValid} onClick={deleteLink}>
            حذف
          </Button>
          <Button onClick={close}>انصراف</Button>
        </Box>
      </Box>
    </Dialog>
  );
};
export default DeleteConfirm;
