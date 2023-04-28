import styled from "styled-components";
import { ItemStyledProps } from "./Item.types";

export const ItemList = styled.li<ItemStyledProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) =>
    props.completed ? `#566f42` : props.selected ? `#787676` : `#4d4d4d`};
  border-radius: 16px;
  box-shadow: ${(props) =>
    props.selected ? `2px 4px 4px #0000009f inset;` : `2px 4px 4px #0000009f;`};
  padding: 12px;
  cursor: ${(props) => (props.completed ? `auto` : `pointer`)};

  svg {
    position: absolute;
    right: 30px;
    width: 16px;
    height: 16px;
  }

  @media screen and (min-width: 1024px) {
    svg {
      right: 50px;
    }
  }
`;

export const Task = styled.h3`
  margin-bottom: 8px;
  word-break: break-all;
`;

export const Timer = styled.span`
  color: #d0d0d0;
`;
