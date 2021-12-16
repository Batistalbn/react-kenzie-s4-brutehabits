import AddIcon from "@mui/icons-material/Add";
import Container from "./style";
const AddButton = ({ ...rest }) => (
  <Container variant="contained" {...rest}>
    <AddIcon fontSize="inherit" />
  </Container>
);
export default AddButton;
