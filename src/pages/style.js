import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  max-width: 600px;

  border: 1px solid #d9d9d9;
  border-radius: 6px;
  padding: 50px;

  @media (min-width: 768px) {
    width: 70vw;
    flex-direction: row;
  }
`;
