import React, { useState } from "react";
import Form from "./Form";
import List from "./List";
import { Task } from "@/types/task";
import * as S from "./home.styles";
import Head from "next/head";
import Stopwatch from "./Stopwatch";

export default function Home() {
  return (
    <>
      <Head>
        <title>Task Board!</title>
        <meta className="title" content="Task Board! - Programe-se!" />
        <meta
          className="description"
          content="Task Board! - Aplicação de gerenciamento de tarefas!"
        />
        <meta
          className="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/taskIcon.png" />
      </Head>
      <S.Container>
        <S.TasksWrapper>
          <Form />
          <List />
        </S.TasksWrapper>
        <Stopwatch />
      </S.Container>
    </>
  );
}
