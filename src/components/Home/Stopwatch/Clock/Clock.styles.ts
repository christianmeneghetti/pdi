import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 4px;
  font-size: 24px;
`;

export const ClockNumber = styled.span`
  display: flex;
  align-items: center;
  background-color: #5d677c;
  border-radius: 8px;
  padding: 4px;

  @media screen and (min-width: 1024px) {
    padding: 8px;
  }
`;

export const ClockDivider = styled.span`
  display: flex;
`;
