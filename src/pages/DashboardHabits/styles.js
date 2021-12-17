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
    width: 100%;
    height: 100%;
    background: var(--red);
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    overflow: auto;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: left;
  height: 4rem;

  align-items: center;
  h2 {
    margin: 20px 40px;
    color: var(--white);
  }
`;

export const ContainerAdd = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Habitdiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
