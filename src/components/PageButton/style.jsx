import { styled } from "@mui/system";
import { Button } from "@mui/material";

const Container = styled(Button)`
  font-size: 15px;
  width: 25px;
  min-width: 0;
  height: 25px;
  box-shadow: none;
  color: ${(props) => props.theme.palette.primary.main};
  border: 1px solid ${(props) => props.theme.palette.primary.main};
  background-color: var(--white);
  padding: 0;
  &:hover {
    color: var(--white);
    border: 1px solid ${(props) => props.theme.palette.primary.light};
    background-color: ${(props) => props.theme.palette.primary.light};
    box-shadow: none;
  }
`;
export default Container;
