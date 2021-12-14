import styled, { keyframes } from "styled-components";
import { fadeInUp } from "react-animations";

const fadeInUpAnimation = keyframes`${fadeInUp}`;

export const FormContainer = styled.div`
  min-width: 320px;
  max-width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--red);
  border-top: none;
  border-radius: 0 0 60px 60px;
  text-align: center;
  padding: 10px;

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
    width: 280px;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--white);
    font-size: 26px;
  }

  span {
    padding: 20px;
    color: var(--white);
  }

  a {
    color: var(--black);
  }
`;

export const FlexContainer = styled.div`
  animation: 1s ${fadeInUpAnimation};
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
`;

export const FormHeader = styled.div`
  height: 100px;
  background-color: var(--white);
  border-bottom: none;
  border-radius: 60px 60px 0 0;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;
