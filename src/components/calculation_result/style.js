import styled, { css, keyframes } from "styled-components";

const goSide = keyframes`
  0%{
    right: -1050px;
    opacity: 0;
  }
  100%{
    right: 0;
    opacity: 1;
  }
`;

export const Container = styled.div`
  & > div {
    & > h2 {
      margin-bottom: 15px;
    }
  }
`;

export const Result = styled.div`
  position: relative;
  background-color: var(--grey_input);
  padding: 9px;
  border-radius: 7px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
  animation: ${goSide} 0.7s forwards;

  & > span {
    color: var(--green_btn);
  }
`;

export const ResultTotal = styled.div`
  font-weight: 700;
  display: flex;
  justify-content: space-between;

  & > span {
    color: var(--green_btn);
  }
`;
