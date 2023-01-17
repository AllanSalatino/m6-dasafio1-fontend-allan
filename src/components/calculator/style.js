import styled, { css, keyframes } from "styled-components";

const goSide = keyframes`
  0%{
    left: -1050px;
    opacity: 0;
  }
  100%{
    left: 0px;
    opacity: 1;
  }
`;

export const FormTag = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50vh;
  max-height: 474px;
  border: 1px 1px 1px black;

  animation: ${goSide} 0.7s forwards;

  border: solid 2px var(--grey_input);
  border-radius: 7px;
  padding: 7px;

  & > h2 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: min-content;
    height: 50px;

    & > label {
      font-size: 14px;
    }

    & > span {
      font-size: 11px;
      color: red;
    }

    & > input {
      background-color: var(--grey_input);
      border-radius: 7px;
      padding: 6px;
      width: 260px;
      font-size: 14px;
    }
  }
  & > button {
    padding: 10px;
    background-color: var(--green_btn);
    width: 260px;
    color: white;
    font-size: 20px;
    font-weight: 600;
    margin-top: 15px;

    :hover {
      background-color: var(--green_btn_hover);
      transition: 0.3s;
    }
  }
`;
