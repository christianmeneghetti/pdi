import React, { useState } from "react";
import Button from "../Button";
import { v4 as uuidv4 } from "uuid";
import * as S from "./Form.styles";
import { useTaskBoard } from "@/hooks/useTaskBoard/useTaskBoard";

export default function Form() {
  const setTasks = useTaskBoard((state) => state.setTasks);

  const [task, setTask] = useState("");
  const [timer, setTimer] = useState("00:00");

  function addTask(event: React.FormEvent) {
    event.preventDefault();
    setTasks({ task, timer, selected: false, completed: false, id: uuidv4() });
    setTask("");
    setTimer("00:00");
  }

  return (
    <S.TaskForm onSubmit={addTask}>
      <S.TaskWrapper>
        <S.InputContainer>
          <S.TaskLabel htmlFor="task">Adicione um novo estudo</S.TaskLabel>
          <S.TaskInput
            type="text"
            className="task"
            id="task"
            value={task}
            onChange={(event) => setTask(event.target.value)}
            placeholder="O que você quer estudar"
            required
          />
        </S.InputContainer>
        <S.InputContainer>
          <S.TaskLabel htmlFor="timer">Tempo</S.TaskLabel>
          <S.TaskInput
            type="time"
            step="1"
            className="timer"
            value={timer}
            onChange={(event) => setTimer(event.target.value)}
            id="timer"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </S.InputContainer>
        <Button type="submit">Adicionar</Button>
      </S.TaskWrapper>
    </S.TaskForm>
  );
}
