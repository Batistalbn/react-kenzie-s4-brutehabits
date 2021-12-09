import styled from "styled-components";

export const FormContainer = styled.div`
  width: 320px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--red);
  border: 2px solid var(--black);
  border-radius: 60px;
  text-align: center;
  padding: 30px;

  button {
    margin-top: 40px;
    border: 1px solid var(--white);
    max-width: 73px;
    min-width: 73px;
  }

  .name {
    border-top: 10px solid transparent;
  }

  .MuiFilledInput-root {
    background-color: var(--white);
    :hover {
      background-color: var(--white);
    }
  }
  .MuiFilledInput-root.Mui-focused {
    background-color: var(--white);
  }
  .MuiFormHelperText-root.Mui-error {
    color: var(--white);
  }

  h1 {
    color: var(--white);
  }
`;

export const FlexContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
`;
