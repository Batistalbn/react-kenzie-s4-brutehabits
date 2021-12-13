import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Container from "./style";
const PageButton = ({ left = false, right = false, onClick }) => (
  <Container variant="contained" onClick={onClick}>
    {left && <ArrowBackIosNewIcon fontSize="inherit" />}
    {right && <ArrowForwardIosIcon fontSize="inherit" />}
  </Container>
);
export default PageButton;
