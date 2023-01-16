import styled from "styled-components";

export const FormTag = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: 75vh;
  width: 80vw;
  max-height: 474px;

  & > h2 {
    font-size: 18px;
    margin-bottom: 25px;
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

    :hover {
      background-color: var(--green_btn_hover);
      transition: 0.3s;
    }
  }
`;
