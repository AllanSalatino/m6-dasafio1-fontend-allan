import styled from "styled-components";

export const Body = styled.body`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    width: 70vw;
    flex-direction: row;
  }
`;
