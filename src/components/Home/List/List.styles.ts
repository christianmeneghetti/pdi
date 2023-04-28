import styled from "styled-components";

export const ListContainer = styled.aside`
  height: 100%;
  width: 100%;
`;

export const ListTitle = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 16px;

  @media screen and (min-width: 1024px) {
    font-size: 2.25rem;
  }
`;

export const ListItems = styled.ul`
  display: flex;
  flex-direction: column;

  max-height: 320px;
  overflow-y: scroll;
  gap: 8px;

  @media screen and (min-width: 1024px) {
    overflow: auto;
    max-height: 490px;
  }
`;
