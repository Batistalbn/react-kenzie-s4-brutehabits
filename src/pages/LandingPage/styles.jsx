import styled, { keyframes } from "styled-components";
import { merge, zoomIn, pulse, fadeInRight } from "react-animations";

const mergeZoomInPulse = merge(zoomIn, pulse);
const zoomInPulseAnimation = keyframes`${mergeZoomInPulse}`;
const fadeInRightAnimation = keyframes`${fadeInRight}`;

export const Container = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const LeftContainer = styled.div`
  width: 50vw;
  height: 100vh;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & img {
    animation: 1.5s ${zoomInPulseAnimation};
    width: 450px;
    height: 300px;
  }
`;

export const RightContainer = styled.div`
  animation: 1s ${fadeInRightAnimation};
  width: 50vw;
  height: 100vh;
  color: var(--white);
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & h2 {
    margin: 5px;
  }

  & span {
    color: var(--red);
  }

  & div {
    width: 65%;
    display: flex;
    justify-content: space-around;
  }

  & button {
    margin-top: 150px;
  }
`;
