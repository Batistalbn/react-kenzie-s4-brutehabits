import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0px 35px 35px 40px;
  display: flex;
  flex-direction: Column;
  flex-wrap: wrap;
`;

export const CardContainer = styled.div`
  width: 100%;
  max-width: 500px;
  min-width: 300px;
  max-height: 180px;
  display: flex;
  flex-direction: Column;
  margin-top: 20px;
  div {
    display: flex;
    flex: 1;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 11px 24px;
  }
`;

// export const CardHeader = styled.div`
//   display: flex;
//   flex: 1;
//   width: 100%;
//   justify-content: space-between;
//   align-items: center;
//   padding: 11px 24px;
// `;

export const CardBody = styled.div`
  display: flex;
  width: 100%;
`;

export const CardImage = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: Column;
`;

export const AddHabit = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
`;
