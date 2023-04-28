import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 16px;
  background-color: #232323;

  @media screen and (min-width: 1024px) {
    padding: 32px;
  }
`;

export const TasksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;
