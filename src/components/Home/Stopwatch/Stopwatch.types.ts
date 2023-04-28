import { Task } from "@/types/tarefa";

export type StopwatchProps = {
  selected: Task | undefined;
  finishTask: () => void;
};
