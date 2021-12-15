import { Container } from "./style";
import { Modal as Standart } from "@mui/material";

const Modal = ({ open, setOpen, children }) => {
  return (
    <Standart
      open={open}
      onClose={() => {
        setOpen(false);
      }}
    >
      <Container>{children}</Container>
    </Standart>
  );
};
export default Modal;
