import { Card } from "@mui/material";
import { styled } from "@mui/system";
export const Container = styled(Card)`
  width: 90%;
  height: 75px;
  margin: 10px auto;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .profile {
    
    height: 75px;
    
  }
  div {
    display: flex;
  }
  p {
    text-align: center;
    line-height: 75px;
    font-size: 0.8rem;
    font-weight: 700;
  }
  button {
    background-color: var(--white);
    font-family: inherit;
    border: none;
    border-radius: 0;
    outline: none;
    padding: 5px;
    margin-right: 20px;
    :hover {
      background-color: var(--platinum);
    }
  }
  .logo {
    height: 75px;
    align-self: self-end;
  }

`;
