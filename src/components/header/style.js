import styled, { css, keyframes } from "styled-components";

const dropDown = keyframes`
  0%{
    top: -150px;
    opacity: 0;
  }
  100%{
    top: 0;
    opacity: 1;
  }
`;

export const HeaderTag = styled.header`
  position: relative;
  animation: ${dropDown} 0.7s forwards;

  display: flex;
  align-items: center;

  background-color: var(--black_header);

  margin-bottom: 25px;

  min-height: 80px;
  width: 100vw;

  & > h1 {
    color: white;
    font-size: 24px;
    margin-left: 15%;
  }
`;
