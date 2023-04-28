import { ItemProps } from "./Item.types";
import * as S from "./Item.styles";
import IconCheck from "@/Icons/IconCheck";

export default function Item({
  task,
  timer,
  selected,
  completed,
  id,
  selectTask,
}: ItemProps) {
  return (
    <S.ItemList
      selected={selected}
      completed={completed}
      onClick={() =>
        !completed &&
        selectTask({
          task,
          timer,
          selected,
          completed,
          id,
        })
      }
    >
      <S.Task>{task}</S.Task>
      <S.Timer>{timer}</S.Timer>
      {completed && (
        <>
          <IconCheck />
        </>
      )}
    </S.ItemList>
  );
}
