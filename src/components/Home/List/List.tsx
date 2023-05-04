import Item from "./Item";
import * as S from "./List.styles";
import { useTaskBoard } from "@/hooks/useTaskBoard/useTaskBoard";

export default function List() {
  const tasks = useTaskBoard((state) => state.tasks);

  return (
    <S.ListContainer>
      <S.ListTitle>Estudos do dia</S.ListTitle>
      <S.ListItems>
        {tasks.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </S.ListItems>
    </S.ListContainer>
  );
}
