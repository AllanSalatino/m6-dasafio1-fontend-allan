import styled, { css, keyframes } from "styled-components";

const goSide = keyframes`
  0%{
    right: -150px;
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
      position: relative;
      animation: ${goSide} 0.7s forwards;

      margin: 20px 0px 40px 0px;

      color: #1b69bb;

      @media (max-width: 768px) {
        text-align: center;
      }
    }
  }
`;

export const Result = styled.div`
  position: relative;
  animation: ${goSide} 0.7s forwards;

  border-radius: 7px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 30px;
  margin-right: 30px;

  width: auto;

  & > p {
    color: #58a9ff;
    font-size: 14px;
  }
  & > span {
    font-size: 14px;
    font-weight: 700;

    color: #1b69bb;
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
