import React, { useState } from "react";
import Form from "./Form";
import List from "./List";
import { Task } from "@/types/tarefa";
import * as S from "./home.styles";
import Head from "next/head";
import Stopwatch from "./Stopwatch";

export default function Home() {
  const [tasks, setTasks] = useState<Task[] | []>([]);
  const [selected, setSelected] = useState<Task>();

  function selectTask(selectedTask: Task) {
    setSelected(selectedTask);
    setTasks((pastTasks) =>
      pastTasks.map((tasks) => ({
        ...tasks,
        selected: tasks.id === selectedTask.id ? true : false,
      }))
    );
  }

  function finishTask() {
    if (selected) {
      setSelected(undefined);
      setTasks((pastTasks) =>
        pastTasks.map((tasks) => {
          if (tasks.id === selected.id) {
            return {
              ...tasks,
              selected: false,
              completed: true,
            };
          }
          return tasks;
        })
      );
    }
  }

  return (
    <>
      <Head>
        <title>Task Board!</title>
        <meta name="title" content="Task Board! - Programe-se!" />
        <meta
          name="description"
          content="Task Board! - Aplicação de gerenciamento de tarefas!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/taskIcon.png" />
      </Head>
      <S.Container>
        <S.TasksWrapper>
          <Form setTasks={setTasks} />
          <List tasks={tasks} selectTask={selectTask} />
        </S.TasksWrapper>
        <Stopwatch selected={selected} finishTask={finishTask} />
      </S.Container>
    </>
  );
}
