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

  height: 60vh;
  max-height: 350px;

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
    gap: 5px;

    & > label {
      color: #404040;
      font-size: 14px;
    }

    & > span {
      font-size: 11px;
      color: red;
    }

    & > input {
      padding: 10px;

      font-size: 14px;

      width: 260px;

      :focus {
        outline: auto;
        outline-color: #3991ffc4;
      }
    }

    & > p {
      font-size: 12px;
      color: grey;
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
