import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Container from "./style";
const PageButton = ({ left = false, right = false }) => (
  <Container variant="contained">
    {left && <ArrowBackIosNewIcon fontSize="inherit" />}
    {right && <ArrowForwardIosIcon fontSize="inherit" />}
  </Container>
);
export default PageButton;
