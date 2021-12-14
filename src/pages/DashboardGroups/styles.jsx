import styled, { keyframes } from "styled-components";
import { fadeInLeft, fadeInRight } from "react-animations";

const fadeInLeftAnimation = keyframes`${fadeInLeft}`;
const fadeInRightAnimation = keyframes`${fadeInRight}`;

export const ContainerMain = styled.main`
  width: 90vw;
  height: 75vh;
  margin: 0 auto;
  background: var(--white);
  border-radius: 40px;
  display: flex;
  justify-content: space-around;
  padding: 3%;

  & section {
    animation: 1s ${fadeInLeftAnimation};
    width: 60%;
    height: 100%;
    background: var(--red);
    border-radius: 40px;
  }

  & div {
    animation: 1s ${fadeInRightAnimation};
    width: 30%;
    height: 100%;
    background: var(--red);
    border-radius: 40px;
  }
`;
