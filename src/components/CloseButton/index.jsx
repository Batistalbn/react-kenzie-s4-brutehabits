import CloseIcon from "@mui/icons-material/Close";
import Container from "./style";
const CloseButton = ({ ...rest }) => (
  <Container variant="contained" {...rest}>
    <CloseIcon fontSize="inherit" />
  </Container>
);
export default CloseButton;
