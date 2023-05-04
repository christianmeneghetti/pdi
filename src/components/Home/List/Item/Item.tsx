import * as S from "./Item.styles";
import IconCheck from "@/Icons/IconCheck";
import { useTaskBoard } from "@/hooks/useTaskBoard/useTaskBoard";
import { ItemProps } from "./Item.types";

export default function Item({
  task,
  timer,
  selected,
  completed,
  id,
}: ItemProps) {
  const { setSelected, selectTask } = useTaskBoard((state) => ({
    setSelected: state.setSelected,
    selectTask: state.selectTask,
  }));

  function select() {
    setSelected({ id, task, timer, selected, completed }),
      selectTask({
        task,
        timer,
        selected,
        completed,
        id,
      });
  }

  return (
    <S.ItemList
      selected={selected}
      completed={completed}
      onClick={() => !completed && select()}
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
