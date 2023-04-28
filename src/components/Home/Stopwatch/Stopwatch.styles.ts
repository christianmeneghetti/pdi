import styled from "styled-components";

export const Stopwatch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 16px;
  }
`;

export const ClockWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #7687a1;
  border-radius: 16px;
  box-shadow: 2px 4px 4px #000000;
  font-size: 2rem;
  justify-content: center;
  margin-bottom: 16px;
  padding: 16px;
  width: 100%;

  @media screen and (min-width: 1024px) {
    font-size: 4rem;
  }
`;
