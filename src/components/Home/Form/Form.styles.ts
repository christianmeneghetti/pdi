import styled from "styled-components";

export const TaskForm = styled.form``;

export const TaskWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #7687a1;
  border-radius: 16px;
  box-shadow: 2px 4px 4px #000000;
  padding: 16px;
  gap: 16px;

  @media screen and (min-width: 1024px) {
    padding: 32px;
    gap: 32px;
    min-width: max-content;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
  &:last-of-type {
    width: fit-content;
  }

  @media screen and (min-width: 1024px) {
    gap: 16px;
    &:last-of-type {
      width: 100%;
    }
  }
`;

export const TaskLabel = styled.label`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 24px;
`;

export const TaskInput = styled.input`
  width: 100%;
  padding: 16px;
  border: unset;
  border-radius: 8px;
  background-color: #5d677c;
  box-shadow: 0px 2px 4px #2d2b2b9f inset;
  font-size: 1rem;

  &::placeholder {
    color: #bfbfbf;
  }
`;
