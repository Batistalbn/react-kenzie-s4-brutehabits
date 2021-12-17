import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Container from "./style";
const PageButton = ({ left = false, right = false, ...rest }) => (
  <Container variant="contained" {...rest}>
    {left && <ArrowBackIosNewIcon fontSize="inherit" />}
    {right && <ArrowForwardIosIcon fontSize="inherit" />}
  </Container>
);
export default PageButton;
