import styled from "styled-components";

export const HeaderTag = styled.header`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 80px;
  background-color: var(--black_header);
  margin-bottom: 25px;

  & > h1 {
    color: white;
    font-size: 24px;
    margin-left: 10%;
  }
`;
