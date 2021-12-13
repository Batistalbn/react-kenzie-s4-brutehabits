import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Container } from "./styles";
const SubmitButton = ({ onSubmit }) => (
  <div>
    <Container onSubmit={onSubmit} variant="contained">
      <ArrowForwardIcon fontSize="inherit" />
    </Container>
  </div>
);
export default SubmitButton;
