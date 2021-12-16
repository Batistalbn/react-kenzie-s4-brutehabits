import { styled } from "@mui/system";
import { Button } from "@mui/material";
export const Container = styled(Button)`
  width: 100px;
  background-color: var(--black);
  color: var(--white);
  height: 100px;
  font-size: 50px;
  border: 1px solid var(--black);
  :hover {
    background-color: var(--white);
    color: var(--black);
  }
`;
