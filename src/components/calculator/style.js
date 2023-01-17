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
  animation: ${goSide} 0.7s forwards;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 60vh;
  max-height: 474px;

  border: solid 2px var(--grey_input);
  border-radius: 7px;

  padding: 20px;

  @media (max-width: 768px) {
    padding: 5px;
  }

  & > h2 {
    text-align: center;
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
      border-bottom: solid 2px var(--grey_input);
      padding: 6px;

      font-size: 14px;

      width: 260px;

      :focus {
        outline: none;
      }
    }
  }
  & > button {
    background-color: var(--green_btn);
    color: white;

    font-size: 20px;
    font-weight: 600;

    margin-top: 15px;
    padding: 10px;

    width: 260px;

    :hover {
      background-color: var(--green_btn_hover);
      transition: 0.3s;
    }
  }
`;
