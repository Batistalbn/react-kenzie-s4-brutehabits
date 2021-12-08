import { Button as StandartButton } from "@mui/material";
import { styled } from "@mui/system";
const Button = styled(StandartButton)`
  font-size: 19px;
  padding: ${(props) => (props.thin ? "0.20em" : "1em")};
  min-width: 200px;
  box-shadow: none;
  border: 2px solid ${(props) => props.theme.palette.primary.main};
  &:hover {
    background-color: ${(props) => props.theme.palette.primary.light};
    box-shadow: none;
  }
`;

export default Button;
