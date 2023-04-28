import styled from "styled-components";

export const Button = styled.button`
  align-self: center;
  background-color: #88bcd1;
  border-radius: 16px;
  box-shadow: 8px 4px 8px #0000009f;
  color: #272626;
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: 600;
  padding: 16px;
  width: 150px;

  &:active {
    background-color: #7ca6b7;
  }

  @media screen and (min-width: 1024px) {
    width: 200px;
    font-size: 2rem;
  }
`;
