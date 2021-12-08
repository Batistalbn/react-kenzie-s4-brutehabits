import styled from "styled-components";

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
    width: 350px;
    height: 350px;
  }
`;

export const RightContainer = styled.div`
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
    width: 40%;
    display: flex;
    justify-content: space-around;
  }

  & button {
    margin-top: 150px;
  }
`;
