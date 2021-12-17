import { Card } from "@mui/material";
import { styled } from "@mui/system";
export const Container = styled(Card)`
  width: 320px;
  height: 60vh;
  border-radius: 5px;
  padding: 20px;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  background-color: var(--red);

  @media (min-width: 600px) {
    width: 320px;
    height: 65vh;
  }
`;
