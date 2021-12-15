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
    padding: 1%;
  }
`;

export const DisplayGroups = styled.div`
  animation: 1s ${fadeInRightAnimation};
  width: 30%;
  height: 100%;
  background: var(--red);
  border-radius: 40px;
`;

export const HeaderGroups = styled.div`
  border: 2px solid blue;
  color: var(--white);
  display: flex;
  margin-top: 10px;
  div {
    display: flex;
  }
`;

export const Pages = styled.div`
  display: flex;
  justify-content: center;
  border: 2px solid green;
  p {
    margin: 0px 10px;
  }
`;
