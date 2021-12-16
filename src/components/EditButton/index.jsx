import EditIcon from "@mui/icons-material/Edit";
import Container from "./style";
const EditButton = ({ ...rest }) => (
  <Container variant="contained" {...rest}>
    <EditIcon fontSize="inherit" />
  </Container>
);
export default EditButton;
