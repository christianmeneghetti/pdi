import Item from "./Item";
import { ListProps } from "./List.types";
import * as S from "./List.styles";

export default function List({ tasks, selectTask }: ListProps) {
  return (
    <S.ListContainer>
      <S.ListTitle>Estudos do dia</S.ListTitle>
      <S.ListItems>
        {tasks.map((item) => (
          <Item selectTask={selectTask} key={item.id} {...item} />
        ))}
      </S.ListItems>
    </S.ListContainer>
  );
}
