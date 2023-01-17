import styled, { css, keyframes } from "styled-components";

const goSide = keyframes`
  0%{
    right: -500px;
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

      margin: 20px 0px 15px 0px;

      color: var(--black_header);

      @media (max-width: 768px) {
        text-align: center;
      }
    }
  }
`;

export const Result = styled.div`
  position: relative;
  animation: ${goSide} 0.7s forwards;

  background-color: var(--grey_input);
  border-radius: 7px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 15px;
  padding: 9px;

  width: 200px;

  & > p {
    font-size: 14px;
  }
  & > span {
    font-size: 14px;
    font-weight: 700;

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
