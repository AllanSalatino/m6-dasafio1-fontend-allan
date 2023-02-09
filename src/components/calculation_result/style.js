import styled, { css, keyframes } from "styled-components";

const goSide = keyframes`
  0%{
    right: -130px;
    opacity: 0;
  }
  100%{
    right: 0;
    opacity: 1;
  }
`;

export const Container = styled.div`
  background-color: #f9f9f9;
  padding: 75px 50px 75px 20px;
  border-radius: 0px 5px 5px 0px;
  height: 450px;
  & > h2 {
    position: relative;

    margin: 20px 0px 40px 0px;
    width: 200px;

    color: #1b69bb;
    font-size: 20px;

    border-bottom: 2px solid #e9e9e9;

    padding-bottom: 20px;

    @media (max-width: 768px) {
      text-align: center;
    }
  }
`;

export const Result = styled.div`
  position: relative;
  animation: ${goSide} 0.7s forwards;

  border-radius: 7px;

  display: flex;
  flex-direction: row;

  margin-bottom: 30px;

  margin-right: 30px;

  gap: 5px;

  & > p {
    color: #58a9ff;
    font-size: 16px;
  }
  & > span {
    font-size: 16px;
    font-weight: 700;

    color: #55a0ee;
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
